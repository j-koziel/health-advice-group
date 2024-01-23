from config import advice_strings
from db.models.health_advice_models import HealthAdviceRes

def create_temp_based_health_advice(temp: int, units: str) -> str:
  temp_desc = "normal"
  if units == "metric" and temp > 25 or units == "imperial" and temp > 77:
    temp_desc = "high"
    return advice_strings["temp_advice"][temp_desc]
  elif units == "metric" and units == "metric" and temp < 25 and temp > 8 or units == "imperial" and temp < 77 and units == "imperial" and temp > 46:
    return advice_strings["temp_advice"][temp_desc]
  else:
    temp_desc = "low"
    return advice_strings["temp_advice"][temp_desc]
  
def create_uv_based_health_advice(uv_index: int) -> str:
  uv_desc = "low"
  if uv_index > 8:
    uv_desc = "high"
    return advice_strings["uv_advice"][uv_desc]
  elif uv_index < 8 and uv_index > 2:
    uv_desc = "normal"
    return advice_strings["uv_advice"][uv_desc]
  else:
    return advice_strings["uv_advice"][uv_desc]
  
def health_risks_based_on_temp(temp: int, units: str) -> list[str]:
  if units == "metric" and temp > 25 or units == "imperial" and temp > 77:
    return advice_strings["health_risks"]["high_temp"]
  elif units == "metric" and temp < 8 or units == "imperial" and temp < 46:
    return advice_strings["health_risks"]["low_temp"]
  else:
    return ["The temperature is normal and there are minimal health risks"]

def create_health_advice(temp: int, uv_index: int, units: str) -> HealthAdviceRes:
  health_advice_res = HealthAdviceRes(temp_advice=create_temp_based_health_advice(temp, units), uv_advice=create_uv_based_health_advice(uv_index), health_risks=health_risks_based_on_temp(temp, units))


  return health_advice_res