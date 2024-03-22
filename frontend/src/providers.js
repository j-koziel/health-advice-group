import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { WeatherUnitsProvider } from "./contexts/UnitsContext";
import { FavLocationsProvider } from "./contexts/FavLocationsContext";
import { AuthProvider } from "./contexts/AuthContext";

export function Providers({ children }) {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <WeatherUnitsProvider>
          <FavLocationsProvider>
            <AuthProvider>{children}</AuthProvider>
          </FavLocationsProvider>
        </WeatherUnitsProvider>
      </NextUIProvider>
    </BrowserRouter>
  );
}
