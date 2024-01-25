from fastapi import APIRouter, HTTPException, status

from db.models.article_models import ArticleInDb
from config import articles_db

router = APIRouter(prefix="/api/v1/articles")


@router.get("/", response_model=list[ArticleInDb])
async def get_articles():
  return articles_db

@router.get("/{title}", response_model=ArticleInDb)
async def get_article(title: str):
  for article in articles_db:
    if article.title == title:
      return article
    
  raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="That article was not found...")