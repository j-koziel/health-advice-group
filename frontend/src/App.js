import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import useDarkMode from "use-dark-mode";
import { Routes, Route } from "react-router-dom";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div className={`${darkMode.value ? "dark" : ""} h-screen`}>
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />


    </div>
  );
}



export default App;
