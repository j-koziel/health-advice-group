import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, Tab, CircularProgress } from "@nextui-org/react";
import axios from "axios";

import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { config } from "../settings/config";
import { getOpenWeatherMapData } from "../utils/get-data";
import { Accordion } from "../components/Accordion";
import { useWeatherUnits } from "../contexts/UnitsContext";

export function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { preferredUnits } = useWeatherUnits();

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const weatherData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.weatherApiKey}&units=${preferredUnits}`
      );
      const currAirQualityData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${config.airQualityApiKey}`
      );
      const currentLocationRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=0&appid=${config.airQualityApiKey}`
      );

      setWeatherData(weatherData);
      setAirQualityData(currAirQualityData.list[0]);
      setCurrentLocation(currentLocationRes.data[0]);
      setIsLoading(false);
    });
  }, [preferredUnits]);

  if (isLoading)
    return (
      <div className="h-full w-full">
        <CircularProgress aria-label="Loading..." />
      </div>
    );

  return (
    <div className="flex flex-col h-full w-full bg-background items-center text-foreground">
      {weatherData && airQualityData && (
        <Tabs
          color="primary"
          className="mt-8"
          classNames={{
            tabList: "bg-altBackground",
            cursor: "w-full bg-altForeground",
            tabContent:
              "text-altForeground group-data-[selected=true]:text-foreground",
          }}
        >
          <Tab key="weather" title="Weather">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { ease: "easeIn" } }}
              className="h-[500px]"
            >
              <WeatherDisplay
                weatherData={weatherData}
                units={preferredUnits}
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
      )}
    </div>
  );
}
