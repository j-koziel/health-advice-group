from uuid import uuid4
from pydantic import BaseModel

class Location(BaseModel):
  lat: float
  lon: float

class NewUser(BaseModel):
  id: str = uuid4(),
  name: str
  email: str
  password: str
  preferred_locations: list[Location] | list[None] = []

class User(BaseModel):
  id: str = uuid4(),
  name: str
  email: str
  preferred_locations: list[Location] | list[None] = []

class UserInDb(User):
  hashed_password: str