import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import useDarkMode from "use-dark-mode";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { WeatherForecast } from "./pages/WeatherForecast";
import { AboutUs } from "./pages/AboutUs";
import { Articles } from "./pages/Articles";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div className={`${darkMode.value ? "dark" : ""}`}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather" element={<WeatherForecast />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
