import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import useDarkMode from "use-dark-mode";
import { Routes, Route } from "react-router-dom";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div className={`${darkMode.value ? "dark" : ""} h-screen`}>
      <Parallax pages={3}>
        <ParallaxLayer offset={0}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
