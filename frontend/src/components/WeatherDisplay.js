import { Wind, Sunrise, Sunset, MoveUp, Droplet, Sun } from "lucide-react";

export function WeatherDisplay({ weatherData }) {
  console.log(weatherData);

  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src="https://openweathermap.org/img/wn/02d@4x.png" alt="weather" />
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold">London, UK</h2>
          <h2 className="text-5xl font-bold">Few Clouds</h2>
          <h3>
            {weatherData.temp}°C (Feelsl like {weatherData.feels_like}°C)
          </h3>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="inline w-fit">
                <Sunrise /> {new Date(weatherData.sunrise).toLocaleTimeString()}
              </div>
              <div className="inline w-fit">
                <Sunset /> {new Date(weatherData.sunset).toLocaleTimeString()}
              </div>
              <div className="inline w-fit">
                <MoveUp rotate={weatherData.wind_deg} /> East
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
      <div></div>
    </div>
  );
}
