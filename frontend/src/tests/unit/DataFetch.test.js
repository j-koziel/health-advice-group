import { getOpenWeatherMapData } from "../../utils/get-data";
import { config } from "../../settings/config";

test("OpenWeatherMap data fetching", async () => {
  const { status, _ } = await getOpenWeatherMapData(
    `https://api.openweathermap.org/data/2.5/weather?lat=40.6970193&lon=-74.3093248&appid=${config.weatherApiKey}`
  );

  expect(status).toBe(200);
});
