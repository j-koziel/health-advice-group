import "./App.css";
import { Header } from "./components/Header/Header";
import useDarkMode from "use-dark-mode";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <div className={`${darkMode.value ? "dark" : ""} h-screen`}>
      <Header />
    </div>
  );
}

export default App;
