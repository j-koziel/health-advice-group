import useDarkMode from "use-dark-mode";
import { MoonStar, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button
        className={`${
          darkMode.value === true
            ? "bg-lightBackground rounded-full p-2"
            : "bg-darkBackground rounded-full p-2"
        }`}
        onClick={darkMode.toggle}
      >
        {darkMode.value === true ? (
          <Sun className="stroke-lightForeground" />
        ) : (
          <MoonStar className="stroke-darkForeground" />
        )}
      </button>
    </div>
  );
}
