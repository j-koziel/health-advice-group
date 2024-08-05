import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { WeatherUnitsProvider } from "./contexts/UnitsContext";

export function Providers({ children }) {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <WeatherUnitsProvider>{children}</WeatherUnitsProvider>
      </NextUIProvider>
    </BrowserRouter>
  );
}
