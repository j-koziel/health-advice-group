from datetime import datetime, timedelta, timezone
from typing import Union

from passlib.context import CryptContext
from jose import JWTError, jwt

from db.models.user_models import UserInDb
from db.db_utils import get_user
from config import ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str):
  return pwd_context.verify(plain_password, hashed_password)

def hash_password(password: str) -> str:
  return pwd_context.hash(password)

def authenticate_user(db: list, email: str, password: str) -> UserInDb:
  user = get_user(db, email=email)
  if not user:
    return False
  if not verify_password(password, user.hashed_password):
    return False
  
  return user

def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None) -> str:
  to_encode = data.copy()
  if expires_delta:
    expire = datetime.now(timezone.utc) + expires_delta
  else:
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

  to_encode.update({"exp": expire})
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, ALGORITHM)
  return encoded_jwt