import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import useDarkMode from "use-dark-mode";
import { Routes, Route } from "react-router-dom";

import { WeatherAndAirQuality } from "./pages/WeatherAndAirQuality";
import { TermsAndConditions } from "./pages/TermsAndConditions";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div
      className={`${
        darkMode.value ? "dark bg-background text-foreground" : ""
      }`}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location-search" element={<WeatherAndAirQuality />} />
        <Route path="/tncs" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
}

export default App;
