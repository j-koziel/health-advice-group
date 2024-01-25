import axios from "axios";

import { config } from "../settings/config";

export async function getOpenWeatherMapData(url) {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getHealthAdviceData(temp, uvIndex, units) {
  try {
    const res = await axios.get(
      `${config.backendUrl}/api/v1/health-advice?temp=${temp}&uv_index=${uvIndex}&units=${units}`
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getArticles() {
  try {
    const res = await axios.get(`${config.backendUrl}/api/v1/articles`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getArticle(articleTitle) {
  try {
    const res = await axios.get(
      `${config.backendUrl}/api/v1/articles/${articleTitle}`
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
}
