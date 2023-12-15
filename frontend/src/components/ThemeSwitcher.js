import useDarkMode from "use-dark-mode";
import { MoonStar, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button
        className="bg-altBackground rounded-full p-2"
        onClick={darkMode.toggle}
      >
        {darkMode.value === true ? (
          <Sun className="stroke-altForeground" />
        ) : (
          <MoonStar className="stroke-altForeground" />
        )}
      </button>
    </div>
  );
}
