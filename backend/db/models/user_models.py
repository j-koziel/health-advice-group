from typing import Union

from uuid import uuid4
from pydantic import BaseModel

class Location(BaseModel):
  lat: float
  lon: float

class NewUser(BaseModel):
  name: str
  email: str
  password: str

class User(BaseModel):
  id: str = uuid4(),
  name: str
  email: str
  preferred_locations: Union[list[Location], list[None]] = []

class UserInDb(User):
  hashed_password: str

class UpdatedUser(BaseModel):
  name: str
  email: str