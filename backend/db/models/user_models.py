from uuid import UUID, uuid4
from pydantic import BaseModel

class Location(BaseModel):
  lat: float
  lon: float

class User(BaseModel):
  id: UUID = uuid4(),
  name: str
  email: str
  password: str
  preferredLocations: list[Location] | list = []