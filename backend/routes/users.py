from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from jose import jwt, JWTError

from db.db_utils import read_db, get_user
from db.models.user_models import UserInDb
from db.models.auth_models import TokenData, Token
from config import SECRET_KEY, ALGORITHM
from utils.auth import authenticate_user

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

router = APIRouter(prefix="/api/v1")

@router.get("/users", tags=["users"])
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
  user = authenticate_user()