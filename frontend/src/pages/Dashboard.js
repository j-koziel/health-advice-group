import { DashboardWidget } from "../components/DashboardWidget";
import { AirQualityDash } from "../components/AirQualityDash";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { getOpenWeatherMapData } from "../utils/get-data";
import { config } from "../settings/config";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { motion } from "framer-motion";

export function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
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

      console.log(currAirQualityData);
      console.log(currWeatherData);

      setWeatherData(currWeatherData);
      setAirQualityData(currAirQualityData.list[0]);
      setIsLoading(false);
    });
  }, []);

  const dashboardItems = [
    weatherData && (
      <WeatherDisplay weatherData={weatherData} displayStyle="compact" />
    ),
    airQualityData && (
      <AirQualityDash airQualityData={airQualityData} dashboardType="compact" />
    ),
  ];

  if (isLoading)
    return (
      <div className="h-full w-full bg-background">
        <CircularProgress aria-label="Loading..." />
      </div>
    );

  return (
    <div className="bg-background h-screen w-full flex flex-row justify-evenly">
      {dashboardItems.map((dashItem, i) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { ease: "easeIn", duration: 0.5 },
            }}
          >
            <DashboardWidget key={i}>{dashItem}</DashboardWidget>;
          </motion.div>
        );
      })}
    </div>
  );
}
