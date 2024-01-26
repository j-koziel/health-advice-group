from typing import Annotated, Union
from datetime import timedelta
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from jose import jwt, JWTError

from db.db_utils import get_user, save_db
from db.models.user_models import UpdatedPassword, UserInDb, NewUser, User, UpdatedUser
from db.models.auth_models import TokenData, Token
from config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES, USERS_DB_PATH, users_db
from utils.auth import authenticate_user, create_access_token, hash_password, verify_password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/users/token")

router = APIRouter(prefix="/api/v1/users")

@router.get("/", tags=["users"])
async def read_users() -> list[UserInDb]:
  """This route will return all the users which exist in the database
  """
  db: list[UserInDb] = users_db
  return db

async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
  credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials",
                                        headers={"WWW-Authenticate": "Bearer"})
  try:
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    id: str = payload.get("sub")
    if id is None:
      raise credentials_exception
    token_data = TokenData(id=id)
  
  except JWTError:
    raise credentials_exception
  
  user: Union[UserInDb, None] = get_user(users_db, id=token_data.id)
  
  if user is None:
    raise credentials_exception
  return user

@router.post("/", response_model=Token, tags=["users"])
async def create_new_user(cand_user: NewUser):
  """This route creates a new user and saves it to the database

  Args:
    cand_user (NewUser): This is the new user which will be validated and 

  Returns:
    TokenData: returns the access token and the type of the token
  """
  if not cand_user:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid user")
  
  for user in users_db:
    if cand_user.email == user.email:
      raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="That user already exists")

  new_user = dict(cand_user)
  new_user["hashed_password"] = hash_password(new_user["password"])
  del new_user["password"]

  new_user["id"] = str(uuid4())

  new_user = UserInDb(**new_user)

  users_db.append(new_user)

  save_db(users_db, USERS_DB_PATH)

  access_token_expires = ACCESS_TOKEN_EXPIRE_MINUTES
  access_token = create_access_token(data={"sub": new_user.id}, expires_delta=timedelta(minutes=access_token_expires))

  return {"access_token": access_token, "token_type": "bearer"}

@router.post("/token", response_model=Token, tags=["users"])
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
  user = authenticate_user(users_db, form_data.username, form_data.password)
  if not user:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password, or the user does not exist", headers={"WWW-Authenticate": "Bearer"})
  
  access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(data={"sub": user.id}, expires_delta=access_token_expires)

  return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=User, tags=["users"])
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
  return current_user

@router.put("/me", tags=["user"])
async def update_me(current_user: Annotated[User, Depends(get_current_user)], updated_user_fields: UpdatedUser):
  curr_user_in_db = get_user(users_db, id=current_user.id)

  if updated_user_fields.name:
    curr_user_in_db.name = updated_user_fields.name

  if updated_user_fields.email:
    curr_user_in_db.email = updated_user_fields.email

  # users_db

  return {"msg": "the user has been updated successfully", "user": updated_user_fields}

@router.put("/me/password", tags=["user"])
async def update_password(current_user: Annotated[User, Depends(get_current_user)], updated_password: UpdatedPassword):
  for user in users_db:
    if user.id == current_user.id:
      user.hashed_password = hash_password(updated_password.new_password)

  if not current_user:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="That user does not exist :(")
  

  return {"msg": "The password has been updated successfully"}
  


