import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { Menu } from "./Menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-fit flex flex-col" id="header">
      <div className="relative w-full h-fit flex flex-col md:flex-row gap-2 items-center justify-between p-4 bg-background text-foreground border-b-2 border-foreground">
        <h1 className="md:text-2xl text-lg font-bold">Health Advice Group</h1>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <ChevronDown className="animate-bounce !order-last md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto" />
        </div>

        <ThemeSwitcher />
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
}
