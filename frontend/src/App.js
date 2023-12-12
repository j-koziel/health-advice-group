import "./App.css";
import { Header } from "./components/Header/Header";
import useDarkMode from "use-dark-mode";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div
      className={`${
        darkMode.value ? "dark" : ""
      } text-foreground bg-background`}
    >
      <Header />
    </div>
  );
}

export default App;
