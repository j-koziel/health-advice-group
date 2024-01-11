from os import getenv, path

from dotenv import load_dotenv

from db.db_utils import read_db
from db.models.user_models import UserInDb

load_dotenv()

SECRET_KEY = getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
USERS_DB_PATH = f"{path.abspath(path.dirname(__file__))}/db/users/users.json"
users_db: list[UserInDb] = read_db(UserInDb, USERS_DB_PATH)