from os import getenv, path

from dotenv import load_dotenv

from db.db_utils import read_db
from db.models.user_models import UserInDb
from db.models.article_models import ArticleInDb

load_dotenv()

SECRET_KEY = getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
USERS_DB_PATH = f"{path.abspath(path.dirname(__file__))}/db/users/users.json"
ARTICLES_DB_PATH = f"{path.abspath(path.dirname(__file__))}/db/articles/articles.json"
users_db: list[UserInDb] = read_db(UserInDb, USERS_DB_PATH)
articles_db: list[ArticleInDb] = read_db(ArticleInDb, ARTICLES_DB_PATH)

advice_strings = {"temp_advice": {"low": "You should probably wear a coat and don't stay outdoors for too long", "normal": False, "high": "Make sure to drink a lot of water to keep cool"}, "uv_advice": {"low": False, "normal": "Some SPF protection is recommended.", "high": "Sunscreen is a must and avoid staying out for too long"}, "health_risks": {"high_temp": ["heatstroke", "heat exhaustion", "heat rash"], "low_temp": ["influenza", "flu", "respiratory disease"]}}