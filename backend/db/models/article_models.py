from pydantic import BaseModel

class ArticleInDb(BaseModel):
  title: str
  title_image_path: str
  content: str  