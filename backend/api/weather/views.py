from typing import Literal

from fastapi import APIRouter

from api.weather.services import get_weather_data
from api.weather.dtos import WeatherRes

weather_router = APIRouter(prefix="/api/v1/weather")

@weather_router.get("/", response_model=WeatherRes)
async def get_weather_for_location(lat: str, lon: str, units: Literal["metric", "imperial", "standard"]) -> WeatherRes:
  weather_data = await get_weather_data(lat, lon, units)

  return WeatherRes(msg="success", weather_data=weather_data)



