import axios from "axios";
// Will be used later on
// import { WeatherDisplay } from "../components/WeatherDisplay";
// import { AirQualityDash } from "../components/AirQualityDash";
import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

export function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // warnings annoy me
  console.log(weatherData);
  console.log(airQualityData);
  console.log(isLoading);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&exclude=minutely,hourly,daily,alerts`
        )
        .then((res) => setWeatherData({ ...res.data.current }))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
      axios
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
          {/* {JSON.stringify(weatherData)} */}
        </Tab>
        <Tab key="air-quality" title="Air Quality">
          {/* {JSON.stringify(airQualityData)} */}
        </Tab>
      </Tabs>
    </div>
  );
}
