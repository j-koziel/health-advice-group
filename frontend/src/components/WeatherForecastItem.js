import { motion } from "framer-motion";

import { formatTempUnits } from "../utils/units";
import { getDayAsString } from "../utils/format-time";

export function WeatherForecastItem({ forecast, delay, units }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", delay } }}
      className="flex flex-col items-center"
    >
      <div className="text-2xl">{getDayAsString(forecast.dt)}</div>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt="weather"
        width={100}
        height={100}
        className="object-cover"
      />
      <div className="text-2xl font-bold">{forecast.weather[0].main}</div>
      <div className="text-xl">
        {Math.round(forecast.main.temp)}
        {formatTempUnits(units)}
      </div>
    </motion.div>
  );
}
