from openai import OpenAI

from config import OPENAI_PROJECT, OPENAI_KEY
from db.models.health_advice_models import HealthAdviceRes

def create_health_advice(weather_data: dict) -> HealthAdviceRes:
  client = OpenAI(project=OPENAI_PROJECT, api_key=OPENAI_KEY)

  response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": f"Please generate three health advice tips based on this weather data from OpenWeatherMap: {weather_data}. Also, please treat any values in the weather data as whole numbers."
          }
        ]
      }
    ],
    temperature=1,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
  )

  print(response.choices[0].message.content)

  formatted_response = response.choices[0].message.content.replace("\n", "")

  first_health_advice_tip = formatted_response.split("1.")[1].split("2.")[0].strip()
  second_health_advice_tip = formatted_response.split("2.")[1].split("3.")[0].strip()
  third_health_advice_tip = formatted_response.split("3.")[1].strip()

  return HealthAdviceRes(advice=[first_health_advice_tip, second_health_advice_tip, third_health_advice_tip])