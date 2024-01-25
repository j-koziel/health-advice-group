import { useState } from "react";

import { LocationSearch } from "../components/LocationSearch";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { AirQualityDash } from "../components/AirQualityDash";
import { useWeatherUnits } from "../context/UnitsContext";

export function WeatherForecast() {
  const [pageState, setPageState] = useState("location");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const { preferredUnits } = useWeatherUnits();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background text-foreground">
      {pageState === "location" ? (
        <LocationSearch
          setPageState={setPageState}
          setWeatherData={setWeatherData}
          setForecastData={setForecastData}
          setAirQualityData={setAirQualityData}
        />
      ) : pageState ===
        "weather"(
          <WeatherDisplay
            displayStyle="weather-forecast"
            weatherData={weatherData}
            units={preferredUnits}
            forecastData={forecastData}
            setPageState={setPageState}
          />
        ) ? (
        <AirQualityDash dashboardType="full" airQualityData={airQualityData} />
      ) : null}
    </div>
  );
}
