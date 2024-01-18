import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { WeatherUnitsProvider } from "./context/UnitsContext";
import { AuthProvider } from "./context/AuthContext";

export function Providers({ children }) {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <WeatherUnitsProvider>
          <AuthProvider>{children}</AuthProvider>
        </WeatherUnitsProvider>
      </NextUIProvider>
    </BrowserRouter>
  );
}
