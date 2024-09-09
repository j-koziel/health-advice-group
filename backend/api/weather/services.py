import httpx

from config import OPENWEATHERMAP_KEY

async def get_weather_data(lat: str, lon: str, units: str):
  client = httpx.AsyncClient()

  res = await client.get(f"https://api.openweathermap.org/data/2.5/weather?&appid={OPENWEATHERMAP_KEY}&lat={lat}&lon={lon}&units={units}")

  return res.json()
