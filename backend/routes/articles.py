from fastapi import APIRouter

from db.models.article_models import ArticleInDb
from config import articles_db

router = APIRouter(prefix="/api/v1/articles")


@router.get("/", response_model=list[ArticleInDb])
async def get_articles():
  return articles_db