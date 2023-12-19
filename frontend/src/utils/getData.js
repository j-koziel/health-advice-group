import axios from "axios";

export async function getOpenWeatherMapData(url) {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}
