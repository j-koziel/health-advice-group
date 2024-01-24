import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import { getOpenWeatherMapData } from "../utils/get-data";
import { useWeatherUnits } from "../context/UnitsContext";
import { config } from "../settings/config";

export function LocationSearch({
  setWeatherData,
  setForecastData,
  setPageState,
}) {
  const [locationData, setLocationData] = useState(null);
  const [locationQuery, setLocationQuery] = useState("");

  const { preferredUnits } = useWeatherUnits();

  return (
    <div className="h-full bg-background text-foreground flex flex-col gap-y-6 justify-center">
      <form
        className="flex gap-x-2"
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            setLocationData(null);
            const data = await getOpenWeatherMapData(
              `https://api.openweathermap.org/geo/1.0/direct?q=${locationQuery}&limit=5&appid=${config.weatherApiKey}`
            );

            if (!data.length) {
              throw Error("No locations were found :(");
            }

            setLocationQuery("");
            setLocationData([...data]);
          } catch (err) {
            toast.error(err.message, { position: "bottom-right" });
          }
        }}
      >
        <input
          className="w-[250px] border-none outline-none bg-background text-2xl placeholder:text-2xl placeholder:text-foreground placeholder:text-opacity-75"
          type="text"
          placeholder="Search for a location..."
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          autoFocus
        />
        <input
          className="border-solid border-foreground border-2 border-opacity-50 rounded-md p-2 cursor-pointer transition-all hover:text-primary hover:border-primary hover:border-opacity-100"
          type="submit"
          value="Search"
        />
      </form>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {locationData &&
          locationData.map((location, i) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { ease: "easeIn", delay: (i + 1) / 8 },
                }}
                key={i}
                onClick={async () => {
                  const weatherData = await getOpenWeatherMapData(
                    `${config.weatherApiUrl}&lat=${location.lat}&lon=${location.lon}&units=${preferredUnits}`
                  );

                  setWeatherData(weatherData);

                  const forecastData = await getOpenWeatherMapData(
                    `${config.weatherForecastApiUrl}&lat=${location.lat}&lon=${location.lon}&units=${preferredUnits}`
                  );

                  // Only getting weather information where the time is 12 AM
                  const cleanedForecastData = forecastData.list.filter(
                    (forecast) => new Date(forecast.dt * 1000).getHours() === 12
                  );

                  setForecastData([...cleanedForecastData]);

                  setPageState("weather");
                }}
                className="text-2xl cursor-pointer transition-all transition-duration-500 hover:scale-125 hover:text-altForeground hover:dark:text-primary"
              >
                {location.name}, {location.country}
              </motion.div>
            );
          })}
      </motion.div>
      <ToastContainer />
    </div>
  );
}
