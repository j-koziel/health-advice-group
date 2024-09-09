from typing import Annotated

from fastapi import APIRouter, Body

from api.health_advice.services import create_health_advice
from api.health_advice.dtos import HealthAdviceRes

health_advice_router = APIRouter(prefix="/api/v1/health-advice")

@health_advice_router.post("/", response_model=HealthAdviceRes)
def get_health_advice(weather_data: Annotated[dict, Body()]):
  return create_health_advice(weather_data)