from typing import Annotated, Union
from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from jose import jwt, JWTError

from db.db_utils import get_user, save_db
from db.models.user_models import UserInDb, NewUser, User
from db.models.auth_models import TokenData, Token
from config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES, USERS_DB_PATH, users_db
from utils.auth import authenticate_user, create_access_token, hash_password

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

@router.post("/", response_model=TokenData, tags=["users"])
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
    if cand_user.id == user.id:
      raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="That user already exists")

  new_user = dict(cand_user)
  new_user["hashed_password"] = hash_password(new_user["password"])
  del new_user["password"]

  new_user = UserInDb(**new_user)

  users_db.append(new_user)

  save_db(users_db, USERS_DB_PATH)

  access_token_expires = ACCESS_TOKEN_EXPIRE_MINUTES
  access_token = create_access_token(data={"sub": new_user.id}, expires_delta=access_token_expires)

  return {"access_token": access_token, "token_type": "bearer"}

@router.post("/token", response_model=Token, tags=["users"])
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
  user = authenticate_user(users_db, form_data.username, form_data.password)
  if not user:
    print(user)
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password", headers={"WWW-Authenticate": "Bearer"})
  
  access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(data={"sub": user.id}, expires_delta=access_token_expires)

  return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=User, tags=["users"])
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
  return current_user