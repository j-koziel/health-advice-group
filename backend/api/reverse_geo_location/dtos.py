from pydantic import BaseModel

class ReverseGeoLocationRes(BaseModel):
  msg: str
  reverse_geo_loc_data: dict