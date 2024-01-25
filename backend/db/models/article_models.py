from pydantic import BaseModel

class ArticleInDb(BaseModel):
  title: str
  title_image_path: str
  title_image_path_xl: str
  content: str  