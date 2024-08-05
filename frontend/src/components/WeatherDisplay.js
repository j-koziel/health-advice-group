import { Wind, Sunrise, Sunset, MoveUp, Droplet } from "lucide-react";
import { motion } from "framer-motion";

import { windDirection } from "../utils/wind-direction";
import { formatTime } from "../utils/format-time";
import { formatTempUnits, formatDistanceUnits } from "../utils/units";
import { HealthAdvice } from "./HealthAdvice";
import { WeatherForecastItem } from "./WeatherForecastItem";

export function WeatherDisplay({
  weatherData,
  units,
  displayStyle,
  forecastData = null,
}) {
  if (displayStyle === "compact")
    return (
      <div className="w-full flex flex-col items-center md:flex-row justify-center text-foreground">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt="weather"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-5xl">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <h2 className="text-5xl capitalize">
                {weatherData.weather[0].description}
              </h2>
              <div className="flex items-end gap-4">
                <h3 className="text-5xl">
                  {Math.round(weatherData.main.temp)}
                  {formatTempUnits(units)}
                </h3>
                <h3 className="text-2xl">
                  Feels like {Math.round(weatherData.main.feels_like)}
                  {formatTempUnits(units)}
                </h3>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xl">
                  <Sunrise height={36} width={36} />
                  {formatTime(weatherData.sys.sunrise)}
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <Sunset height={36} width={36} />
                  {formatTime(weatherData.sys.sunset)}
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <MoveUp
                    style={{ transform: `rotate(${weatherData.wind.deg}deg)` }}
                    height={36}
                    width={36}
                  />
                  {windDirection(weatherData.wind.deg)}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xl">
                  <Droplet height={36} width={36} /> {weatherData.main.humidity}
                  % humidity
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <Wind height={36} width={36} /> Wind speed:{" "}
                  {Math.round(weatherData.wind.speed)}{" "}
                  {formatDistanceUnits(units)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else if (displayStyle === "weather-forecast") {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: "easeIn", delay: 1.2 } }}
          className="flex items-center justify-center mb-10 relative"
        >
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt="weather"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-5xl">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <h2 className="text-5xl capitalize">
                {weatherData.weather[0].description}
              </h2>
              <div className="flex items-end gap-4">
                <h3 className="text-5xl">
                  {Math.round(weatherData.main.temp)}
                  {formatTempUnits(units)}
                </h3>
                <h3 className="text-3xl">
                  (Feels like {Math.round(weatherData.main.feels_like)}
                  {formatTempUnits(units)})
                </h3>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xl">
                  <Sunrise height={36} width={36} />
                  {formatTime(weatherData.sys.sunrise)}
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <Sunset height={36} width={36} />
                  {formatTime(weatherData.sys.sunset)}
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <MoveUp
                    style={{
                      transform: `rotate(${weatherData.wind.deg}deg)`,
                    }}
                    height={36}
                    width={36}
                  />
                  {windDirection(weatherData.wind.deg)}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xl">
                  <Droplet height={36} width={36} /> {weatherData.main.humidity}
                  % humidity
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <Wind height={36} width={36} /> Wind speed:{" "}
                  {Math.round(weatherData.wind.speed)}{" "}
                  {formatDistanceUnits(units)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-evenly w-full">
          {forecastData &&
            forecastData.map((forecast, i) => {
              return (
                <WeatherForecastItem
                  key={i}
                  forecast={forecast}
                  delay={i / 4}
                  units={units}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col gap-y-8 items-center md:flex-row md:justify-around md:items-center md:gap-x-12">
        <div className="flex flex-col items-center md:flex-row justify-center text-foreground">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt="weather"
              width={200}
              height={200}
              className="object-cover"
            />
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-5xl">
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
                <h2 className="text-5xl capitalize">
                  {weatherData.weather[0].description}
                </h2>
                <div className="flex items-end gap-4">
                  <h3 className="text-5xl">
                    {Math.round(weatherData.main.temp)}
                    {formatTempUnits(units)}
                  </h3>
                  <h3 className="text-3xl">
                    (Feels like {Math.round(weatherData.main.feels_like)}
                    {formatTempUnits(units)})
                  </h3>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xl">
                    <Sunrise height={36} width={36} />
                    {formatTime(weatherData.sys.sunrise)}
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <Sunset height={36} width={36} />
                    {formatTime(weatherData.sys.sunset)}
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <MoveUp
                      style={{
                        transform: `rotate(${weatherData.wind.deg}deg)`,
                      }}
                      height={36}
                      width={36}
                    />
                    {windDirection(weatherData.wind.deg)}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xl">
                    <Droplet height={36} width={36} />{" "}
                    {weatherData.main.humidity}% humidity
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <Wind height={36} width={36} /> Wind speed:{" "}
                    {Math.round(weatherData.wind.speed)}{" "}
                    {formatDistanceUnits(units)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
