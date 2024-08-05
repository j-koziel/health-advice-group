from os import getenv

from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = getenv("SECRET_KEY")
OPENAI_KEY = getenv("OPENAI_KEY")
OPENAI_PROJECT = getenv("OPENAI_PROJECT_ID")
