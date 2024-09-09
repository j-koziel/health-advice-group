from pydantic import BaseModel

class WeatherRes(BaseModel):
  msg: str
  weather_data: dict