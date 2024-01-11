from typing import Annotated
from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from jose import jwt, JWTError

from db.db_utils import read_db, get_user
from db.models.user_models import UserInDb, User
from db.models.auth_models import TokenData, Token
from config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from utils.auth import authenticate_user, create_access_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

router = APIRouter(prefix="/api/v1/users")

@router.get("/", tags=["users"])
async def read_users() -> list[UserInDb]:
  db: list[UserInDb] = read_db(UserInDb, "C:/Users/40184214/health-advice-group/backend/db/users/users.json")
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
  
  user: UserInDb | None = get_user(read_db(UserInDb, "C:/Users/40184214/health-advice-group/backend/db/users/users.json"), id=token_data.id)
  
  if user is None:
    raise credentials_exception
  return user

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
  user = authenticate_user(read_db(UserInDb, "C:/Users/40184214/health-advice-group/backend/db/users/users.json"), form_data.username, form_data.password)
  if not user:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password", headers={"WWW-Authenticate": "Bearer"})
  
  access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(data={"sub": user.id}, expires_delta=access_token_expires)

  return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=User)
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
  return current_user