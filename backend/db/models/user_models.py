from uuid import uuid4
from pydantic import BaseModel

class Location(BaseModel):
  lat: float
  lon: float

class User(BaseModel):
  id: str = uuid4(),
  name: str
  email: str
  preferred_locations: list[Location] = []

class UserInDb(User):
  hashed_password: str