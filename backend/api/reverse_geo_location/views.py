from fastapi import APIRouter

from api.reverse_geo_location.dtos import ReverseGeoLocationRes
from api.reverse_geo_location.services import reverse_coordinates

reverse_geo_loc_router = APIRouter(prefix="/api/v1/reverse-geo-location")

@reverse_geo_loc_router.get("/", response_model=ReverseGeoLocationRes)
async def get_air_quality_for_location(lat: str, lon: str, limit: int) -> ReverseGeoLocationRes:
  reversed_coordinates = await reverse_coordinates(lat, lon, limit)

  return ReverseGeoLocationRes(msg="success", reverse_geo_loc_data=reversed_coordinates)