import axios from "axios";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

export function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const weatherData = axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        )
        .then((res) => setWeatherData({ ...res.data.current }))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
      const airQualityData = axios
        .get(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_AIR_QUALITY_KEY}`
        )
        .then((res) => setAirQualityData({ ...res.data.list[0] }))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    });
  }, []);

  return (
    <div className="flex flex-col h-full bg-background items-center text-foreground">
      <Tabs color="primary">
        <Tab key="weather" title="Weather" className="text-foreground">
          {/* <WeatherDisplay weatherData={weatherData} /> */}
          hello
        </Tab>
        <Tab key="air-quality" title="Air Quality">
          {JSON.stringify(airQualityData)}
        </Tab>
      </Tabs>
    </div>
  );
}
