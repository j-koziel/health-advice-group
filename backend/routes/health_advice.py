from fastapi import APIRouter, HTTPException, status

from utils.health_advice import create_health_advice
from db.models.health_advice_models import HealthAdviceRes

router = APIRouter(prefix="/api/v1/health-advice")

@router.get("/", response_model=HealthAdviceRes)
def get_health_advice(temp: int, uv_index: int, units: str):
  if not temp:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No temperature provided.")
  
  if not uv_index:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No uv index provided.")

  if not units:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No units provided")
  
  return create_health_advice(temp, uv_index, units)