import httpx

from config import OPENWEATHERMAP_KEY

async def reverse_coordinates(lat: str, lon: str, limit: int):
  client = httpx.AsyncClient()

  res = await client.get(f"https://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={OPENWEATHERMAP_KEY}")

  return res.json()