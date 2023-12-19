import { Wind, Sunrise, Sunset, MoveUp, Droplet, Sun } from "lucide-react";
import { windDirection } from "../utils/windDirection";

export function WeatherDisplay({ weatherData }) {
  const timeDisplayOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <div className="flex justify-between text-foreground">
      <div className="flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt="weather"
          width={200}
          height={200}
          className="object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold">London, UK</h2>
          <h2 className="text-5xl font-bold">Few Clouds</h2>
          <h3>
            {Math.round(weatherData.temp)}°C (Feels like{" "}
            {Math.round(weatherData.feels_like)}°C)
          </h3>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="inline w-fit">
                <Sunrise /> {new Date(1702973042 + Date.now()).toDateString()}
              </div>
              <div className="inline w-fit">
                <Sunset /> {new Date(1703001211).toDateString()}
              </div>
              <div className="inline w-fit">
                <MoveUp
                  style={{ transform: `rotate(${weatherData.wind_deg}deg)` }}
                />
                {windDirection(weatherData.wind_deg)}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline w-fit">
                <Sun /> UV Index. {weatherData.uvi}
              </div>
              <div className="inline w-fit">
                <Droplet /> {weatherData.humidity}% humidity
              </div>
              <div className="inline w-fit">
                <Wind /> Wind speed: {weatherData.wind_speed} m/s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
