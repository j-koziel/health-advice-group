// Will be used later on
import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { useEffect, useState } from "react";
import { config } from "../settings/config";
import { getOpenWeatherMapData } from "../utils/getData";
import { Tabs, Tab } from "@nextui-org/react";

export function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const currWeatherData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${config.oneCallApiKey}`
      );
      const currAirQualityData = await getOpenWeatherMapData(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${config.airQualityApiKey}`
      );
      console.log(currWeatherData);

      setWeatherData(currWeatherData.current);
      setAirQualityData(currAirQualityData.list[0]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex flex-col h-full bg-background items-center text-foreground">
      <Tabs color="primary">
        <Tab key="weather" title="Weather" className="text-foreground">
          <WeatherDisplay weatherData={weatherData} />
        </Tab>
        <Tab key="air-quality" title="Air Quality">
          <AirQualityDash airQualityData={airQualityData} />
        </Tab>
      </Tabs>
    </div>
  );
}
