import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import useDarkMode from "use-dark-mode";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div className={`${darkMode.value ? "dark" : ""}`}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
