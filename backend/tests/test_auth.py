from fastapi.testclient import TestClient
import sys
import os

# This is necessary for pytest to correctly find the app module
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app

client = TestClient(app)

def test_user_login_with_valid_credentials():
  """Test the authentication of the backend with valid credentials

  Args: none

  Returns: nothing
  """
  res = client.post("/api/v1/users/token", data={"username": "string@gmail.com", "password": "string"}, headers={"accept": "application/x-www-form-urlencoded"})

  assert res.status_code == 200

def test_user_login_with_invalid_credentials():
  """Test the authentication of the backend with invalid credentials

  Args: none

  Returns: nothing
  """
  res = client.post("/api/v1/users/token", data={"username": "string@gmail.com", "password": "blahblah"}, headers={"accept": "application/x-www-form-urlencoded"})

  assert res.status_code == 401