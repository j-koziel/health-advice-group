from pydantic import BaseModel


class HealthAdviceRes(BaseModel):
  temp_advice: str
  uv_advice: str
  health_risks: list[str]