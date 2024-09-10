from fastapi import APIRouter

from api.reverse_geo_location.dtos import ReverseGeoLocationRes
from api.reverse_geo_location.services import reverse_coordinates

air_quality_router = APIRouter(prefix="/api/v1/air-quality")

@air_quality_router.get("/", response_model=ReverseGeoLocationRes)
async def get_air_quality_for_location(lat: str, lon: str, limit: int) -> ReverseGeoLocationRes:
  reversed_coordinates = await reverse_coordinates(lat, lon, limit)

  return ReverseGeoLocationRes(msg="success", reverse_geo_loc_data=reversed_coordinates)