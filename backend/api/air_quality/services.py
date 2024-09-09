import httpx

from config import OPENWEATHERMAP_KEY

async def get_air_quality_data(lat: str, lon: str):
  client = httpx.AsyncClient()

  res = await client.get(f"https://api.openweathermap.org/data/2.5/air_pollution?&appid={OPENWEATHERMAP_KEY}&lat={lat}&lon={lon}")

  return res.json()