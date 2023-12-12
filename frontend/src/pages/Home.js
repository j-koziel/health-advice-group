import axios from "axios";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function Home() {
  const { userLat, setUserLat } = useState(0);
  const { userLon, setUserLon } = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLat(position.coords.latitude);
      setUserLon(position.coords.longitude);
    });
  });

  const { status, weatherData, error, isFetching } = useQuery(
    ["data"],
    async () => {
      const data = await axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${userLat}&lon=${userLon}&appid=`
        )
        .res((data) => data.data.current)
        .catch((err) => {
          console.error(err);
        });

      return data;
    }
  );

  return (
    <div className="h-full bg-background">
      <WeatherDisplay data=/>
    </div>
  );
}
