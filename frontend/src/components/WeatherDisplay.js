import { Wind, Sunrise, Sunset, MoveUp, Droplet, Sun } from "lucide-react";

export function WeatherDisplay() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src="https://openweathermap.org/img/wn/02d@4x.png" alt="weather" />
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold">London, UK</h2>
          <h2 className="text-5xl font-bold">Few Clouds</h2>
          <h3>24°C (Feelsl like 25°C)</h3>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="inline w-fit">
                <Sunrise /> 05:00
              </div>
              <div className="inline w-fit">
                <Sunset /> 17:00
              </div>
              <div className="inline w-fit">
                <MoveUp /> Easy
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline w-fit">
                <Sun /> UV Index. 4
              </div>
              <div className="inline w-fit">
                <Droplet /> 50% humidity
              </div>
              <div className="inline w-fit">
                <Wind /> Wind speed: 3.6 m/s
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
