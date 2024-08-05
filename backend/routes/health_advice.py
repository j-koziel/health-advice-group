from typing import Annotated

from fastapi import APIRouter, Body

from utils.health_advice import create_health_advice
from db.models.health_advice_models import HealthAdviceRes

router = APIRouter(prefix="/api/v1/health-advice")

@router.post("/", response_model=HealthAdviceRes)
def get_health_advice(weather_data: Annotated[dict, Body()]):
  return create_health_advice(weather_data)