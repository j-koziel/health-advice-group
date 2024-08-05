import axios from "axios";

import { config } from "../settings/config";

export async function getOpenWeatherMapData(url) {
  try {
    const res = await axios.get(url);
    console.log(res.data);

    return res.data;
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

    console.log(res.data.advice);

    return res.data.advice;
  } catch (err) {
    console.error(err);
  }
}
