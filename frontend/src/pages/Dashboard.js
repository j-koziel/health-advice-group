import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { motion } from "framer-motion";

import { DashboardWidget } from "../components/DashboardWidget";
import { AirQualityDash } from "../components/AirQualityDash";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { UserSettings } from "../components/UserSettings";
import { getOpenWeatherMapData } from "../utils/get-data";
import { config } from "../settings/config";
import { useAuth } from "../context/AuthContext";
import { useWeatherUnits } from "../context/UnitsContext";

export function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { accessToken, me } = useAuth();
  const { preferredUnits } = useWeatherUnits();

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const currWeatherData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.weatherApiKey}&units=${preferredUnits}`
      );
      const currAirQualityData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${config.airQualityApiKey}`
      );

      setWeatherData(currWeatherData);
      setAirQualityData(currAirQualityData.list[0]);
    });

    me(accessToken, setUserData);

    setIsLoading(false);
  }, [preferredUnits, me, accessToken]);

  const dashboardItems = [
    weatherData && (
      <WeatherDisplay
        weatherData={weatherData}
        units={preferredUnits}
        displayStyle="compact"
      />
    ),
    airQualityData && (
      <AirQualityDash airQualityData={airQualityData} dashboardType="compact" />
    ),
    userData && <UserSettings userData={userData} />,
  ];

  if (isLoading)
    return (
      <div className="h-screen w-full bg-background">
        <CircularProgress aria-label="Loading..." />
      </div>
    );

  return (
    <div className="bg-background w-full flex flex-col text-foreground sm:flex-col md:flex-col lg:flex-row lg:h-screen">
      {dashboardItems.map((dashItem, i) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { ease: "easeIn", duration: 0.5 },
            }}
            key={i}
          >
            <DashboardWidget key={i}>{dashItem}</DashboardWidget>
          </motion.div>
        );
      })}
    </div>
  );
}
