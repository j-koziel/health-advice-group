from fastapi import APIRouter

from api.air_quality.dtos import AirQualityRes
from api.air_quality.services import get_air_quality_data

air_quality_router = APIRouter(prefix="/api/v1/air-quality")

@air_quality_router.get("/", response_model=AirQualityRes)
async def get_air_quality_for_location(lat: str, lon: str) -> AirQualityRes:
  air_quality_data = await get_air_quality_data(lat, lon)

  return AirQualityRes(msg="success", air_quality_data=air_quality_data)