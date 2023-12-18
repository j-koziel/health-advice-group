import useDarkMode from "use-dark-mode";
import { MoonStar, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button
        className="bg-altBackground rounded-full p-2"
        onClick={darkMode.toggle}
        alt="Enable dark mode"
      >
        {darkMode.value === true ? (
          <MoonStar className="stroke-altForeground" alt="Enable light mode" />
        ) : (
          <Sun className="stroke-altForeground" alt="Enable dark mode" />
        )}
      </button>
    </div>
  );
}
