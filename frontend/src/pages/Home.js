// Will be used later on
import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { useEffect, useState } from "react";
import { config } from "../settings/config";
import { getOpenWeatherMapData } from "../utils/get-data";
import { Tabs, Tab, CircularProgress } from "@nextui-org/react";
import { motion } from "framer-motion";
import axios from "axios";

export function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const currWeatherData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.weatherApiKey}&units=metric`
      );
      const currAirQualityData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${config.airQualityApiKey}`
      );
      const currentLocationRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=0&appid=${config.airQualityApiKey}`
      );

      setWeatherData(currWeatherData);
      setAirQualityData(currAirQualityData.list[0]);
      setCurrentLocation(currentLocationRes.data[0]);
      setIsLoading(false);
      console.log(currWeatherData);
    });
  }, []);

  if (isLoading)
    return (
      <div className="h-full">
        <CircularProgress aria-label="Loading..." />;
      </div>
    );

  return (
    <div className="flex flex-col h-full bg-background items-center text-foreground">
      <Tabs color="primary">
        <Tab key="weather" title="Weather" className="text-foreground">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: "easeIn" } }}
          >
            <WeatherDisplay
              weatherData={weatherData}
              location={currentLocation}
            />
          </motion.div>
        </Tab>
        <Tab key="air-quality" title="Air Quality">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: "easeIn" } }}
          >
            <AirQualityDash airQualityData={airQualityData} />
          </motion.div>
        </Tab>
      </Tabs>
    </div>
  );
}
