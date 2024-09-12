from pydantic import BaseModel

class ReverseGeoLocationResponse(BaseModel):
    msg: str
    reverse_geo_loc_data: list