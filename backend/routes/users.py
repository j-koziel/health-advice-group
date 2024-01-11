from fastapi import APIRouter
from db.db_utils import read_db
from db.models.user_models import User

router = APIRouter(prefix="/api/v1")

@router.get("/users", tags=["users"])
async def read_users() -> list[User]:
  db: list[User] = read_db(User, "C:/Users/40184214/health-advice-group/backend/db/users/users.json")
  return db