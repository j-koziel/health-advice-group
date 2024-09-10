from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from api.health_advice.views import health_advice_router
from api.weather.views import weather_router
from api.air_quality.views import air_quality_router
from api.reverse_geo_location.views import reverse_geo_loc_router


limiter = Limiter(key_func=get_remote_address, default_limits=["100/minute"])
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://health-advice-group.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
  return {"msg": "all systems operational 🥳"}

app.include_router(health_advice_router)
app.include_router(weather_router)
app.include_router(air_quality_router)
app.include_router(reverse_geo_loc_router)
