from typing import Union

from pydantic import BaseModel


class HealthAdviceRes(BaseModel):
  temp_advice: Union[str, bool]
  uv_advice: Union[str, bool]
  health_risks: list[str]