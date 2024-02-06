import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

import { DashboardWidget } from "../components/DashboardWidget";
import { AirQualityDash } from "../components/AirQualityDash";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { UserSettings } from "../components/UserSettings";
import { HealthAdvice } from "../components/HealthAdvice";
import { Carousel } from "../components/Carousel";
import { getOpenWeatherMapData } from "../utils/get-data";
import { config } from "../settings/config";
import { useAuth } from "../context/AuthContext";
import { useWeatherUnits } from "../context/UnitsContext";

import "react-toastify/dist/ReactToastify.css";

export function Dashboard() {
  const [weatherData, setWeatherData] = useState([]);
  const [airQualityData, setAirQualityData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { accessToken, me } = useAuth();
  const { preferredUnits } = useWeatherUnits();

  useEffect(() => {
    if (!accessToken) {
      toast.error("You are not logged in!!!");
      navigate("/sign-in");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const currWeatherData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.weatherApiKey}&units=${preferredUnits}`
      );
      const currAirQualityData = await getOpenWeatherMapData(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${config.airQualityApiKey}`
      );

      setWeatherData((existingWeatherData) => [
        ...existingWeatherData,
        currWeatherData,
      ]);
      setAirQualityData((existingAirQualityData) => [
        ...existingAirQualityData,
        currAirQualityData,
      ]);
    });

    const getData = async () => {
      const user = await me(accessToken, setUserData);
      const getWeatherAtPreferredLocations = async () => {
        const preferredLocationsWeatherData =
          user &&
          (await Promise.all(
            user.preferred_locations.map(
              async (location) =>
                await getOpenWeatherMapData(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${config.weatherApiKey}&units=${preferredUnits}`
                )
            )
          ));

        setWeatherData((existingWeatherData) => [
          ...existingWeatherData,
          ...preferredLocationsWeatherData,
        ]);
        return;
      };

      const getAirQualityAtPreferredLocations = async () => {
        const preferredLocationsAirQualityData =
          user &&
          (await Promise.all(
            user.preferred_locations.map(
              async (location) =>
                await getOpenWeatherMapData(
                  `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${config.airQualityApiKey}`
                )
            )
          ));

        setAirQualityData((existingAirQualityData) => [
          ...existingAirQualityData,
          ...preferredLocationsAirQualityData,
        ]);
        return;
      };

      getWeatherAtPreferredLocations();
      getAirQualityAtPreferredLocations();
    };

    getData();

    setIsLoading(false);
  }, [preferredUnits]);

  useEffect(() => {
    userData &&
      toast.success(`Welcome back, ${userData.name}!!!`, {
        style: {
          backgroundColor: "#242929",
          color: "#ECF5F5",
        },
      });
  }, [userData]);

  const dashboardItems = [
    weatherData.length && userData && (
      <Carousel
        items={userData.preferred_locations.map((_, i) => {
          return (
            <div className="w-[500px] flex flex-col items-center justify-center">
              <WeatherDisplay
                weatherData={weatherData[i]}
                units={preferredUnits}
                displayStyle="compact"
              />
              <HealthAdvice
                temp={Math.round(weatherData[i].main.temp)}
                uvIndex={4}
              />
            </div>
          );
        })}
        width={600}
      />
    ),
    airQualityData.length && (
      <Carousel
        items={userData.preferred_locations.map((_, i) => (
          <div>
            <AirQualityDash
              airQualityData={airQualityData[i].list[0]}
              dashboardType="compact"
              location={`${weatherData[i].name}, ${weatherData[i].sys.country}`}
            />
          </div>
        ))}
        width={300}
      />
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
    <div className="bg-background w-full flex flex-col text-foreground sm:flex-col md:flex-col lg:flex-row lg:flex-wrap lg:h-screen">
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
      <ToastContainer
        position="bottom-right"
        draggable={true}
        transition="zoom"
        limit={1}
      />
    </div>
  );
}
