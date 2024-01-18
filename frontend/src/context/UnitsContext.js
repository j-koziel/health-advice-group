import { createContext, useContext, useState } from "react";

export const WeatherUnitsContext = createContext();

export const useWeatherUnits = () => useContext(WeatherUnitsContext);

export const WeatherUnitsProvider = ({ children }) => {
  const [preferredUnits, setPreferredUnits] = useState(
    localStorage.getItem("preferredUnits") ?? "metric"
  );

  return (
    <WeatherUnitsContext.Provider value={{ preferredUnits, setPreferredUnits }}>
      {children}
    </WeatherUnitsContext.Provider>
  );
};
