from pydantic import BaseModel

class HealthAdviceRes(BaseModel):
  advice: list[str]