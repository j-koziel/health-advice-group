import { Wind, Sunrise, Sunset, MoveUp, Droplet, Sun } from "lucide-react";
import { windDirection } from "../utils/wind-direction";
import { formatTime } from "../utils/format-time";
export function WeatherDisplay({ weatherData, location }) {
  return (
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
              {weatherData.name}, {location.country}
            </h2>
            <h2 className="text-5xl capitalize">
              {weatherData.weather[0].description}
            </h2>
            <div className="flex items-end gap-4">
              <h3 className="text-5xl">
                {Math.round(weatherData.main.temp)}°C
              </h3>
              <h3 className="text-3xl">
                (Feels like {Math.round(weatherData.main.feels_like)}°C)
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
                <Sun height={36} width={36} /> UV Index. {weatherData.uvi}
              </div>
              <div className="flex items-center gap-2 text-xl">
                <Droplet height={36} width={36} /> {weatherData.main.humidity}%
                humidity
              </div>
              <div className="flex items-center gap-2 text-xl">
                <Wind height={36} width={36} /> Wind speed:{" "}
                {Math.round(weatherData.wind.speed)} m/s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
