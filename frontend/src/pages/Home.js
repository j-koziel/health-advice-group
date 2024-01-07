// Will be used later on
import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { useEffect, useState } from "react";
import { config } from "../settings/config";
import { getOpenWeatherMapData } from "../utils/get-data";
import { Tabs, Tab, CircularProgress } from "@nextui-org/react";
import { motion } from "framer-motion";
import axios from "axios";
import { Accordion } from "../components/Accordion";

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
    });
  }, []);

  const accordionData = [
    {
      title: "Where do you get your data from?",
      content:
        "Obviously we want to be as accurate as possible when it comes to the data that we display on this site. To do this we are using an industry standard data source which is also used by established brands such as Microsoft, Amazon and Google",
    },
    {
      title: "Where do you get the health advice from?",
      content:
        "We have an in-house formula which automatically selects the best advice based on the current weather conditions",
    },
    {
      title: "Why do I need this?",
      content:
        "In my opinion this tool is essential if you want to ensure your health even in the most extreme of weather conditions.",
    },
  ];

  if (isLoading)
    return (
      <div className="h-full w-full">
        <CircularProgress aria-label="Loading..." />;
      </div>
    );

  return (
    <div className="flex flex-col h-full w-full bg-background items-center text-foreground pb-96">
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
              location={currentLocation}
            />
          </motion.div>
        </Tab>
        <Tab key="air-quality" title="Air Quality">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: "easeIn" } }}
            className="h-[500px]"
          >
            <AirQualityDash airQualityData={airQualityData} />
          </motion.div>
        </Tab>
      </Tabs>

      <div className="h-full w-full px-12 mt-52 md:mt-0">
        <h1 className="text-9xl py-44 font-bold">FAQs</h1>
        <Accordion accordionData={accordionData} />
      </div>
    </div>
  );
}
