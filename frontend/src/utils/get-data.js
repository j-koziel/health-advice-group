import axios from "axios";

import { config } from "../settings/config";

export async function getOpenWeatherMapData(url) {
  try {
    const res = await axios.get(url);

    return res.data.weather_data || res.data.air_quality_data;
  } catch (err) {
    console.error(err);
  }
}

export async function getHealthAdviceData(weatherData) {
  try {
    const res = await axios.post(
      `${config.backendUrl}/api/v1/health-advice`,
      weatherData
    );

    return res.data.advice;
  } catch (err) {
    console.error(err);
  }
}
