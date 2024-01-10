from fastapi import APIRouter
import uuid

router = APIRouter(prefix="/api/v1")

@router.get("/users", tags=["users"])
async def read_users():
  print(uuid.uuid4())
  return {"msg": "hello"}