from pydantic import BaseModel

class AirQualityRes(BaseModel):
  msg: str
  air_quality_data: dict