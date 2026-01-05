import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, Tab, CircularProgress } from "@nextui-org/react";
import axios from "axios";

import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { HealthAdvice } from "../components/HealthAdvice";
import { config } from "../settings/config";
import { getOpenWeatherMapData } from "../utils/get-data";
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
        `${config.weatherApiUrl}?lat=${latitude}&lon=${longitude}&units=${preferredUnits}`
      );
      const currAirQualityData = await getOpenWeatherMapData(
        `${config.airQualityApiUrl}?lat=${latitude}&lon=${longitude}`
      );
      const currentLocationRes = await axios.get(
        `${config.reverseGeoLocationApiUrl}?lat=${latitude}&lon=${longitude}&limit=0`
      );

      setWeatherData(weatherData);
      setAirQualityData(currAirQualityData.list[0]);
      setCurrentLocation(currentLocationRes.data[0]);
      setIsLoading(false);
    });
  }, [preferredUnits]);

  if (isLoading)
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <CircularProgress aria-label="Loading..." />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-background text-foreground">
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
              className="min-h-screen w-full flex flex-col lg:flex-row"
            >
              <WeatherDisplay
                weatherData={weatherData}
                units={preferredUnits}
                location={currentLocation}
              />
              <HealthAdvice weatherData={weatherData} />
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
