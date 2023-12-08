"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonStar />
        </button>
      )}
    </div>
  );
}
