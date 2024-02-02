import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { WeatherUnitsProvider } from "./context/UnitsContext";
import { FavLocationsProvider } from "./context/FavLocationsContext"
import { AuthProvider } from "./context/AuthContext";


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
