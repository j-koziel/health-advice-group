import axios from "axios";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function Home() {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const data = axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=`
        )
        .then((res) => console.log(res.data.current))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    });
  }, [setWeatherData, weatherData]);

  return (
    <div className="h-full bg-background">
      {/* <WeatherDisplay data={weatherData} /> */}
    </div>
  );
}
