import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { Menu } from "./Menu";
import { motion } from "framer-motion";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const headerHeight = document.querySelector("#header").clientHeight;

  return (
    <div className="w-full h-fit flex flex-col" id="header">
      <div className="relative w-full h-fit flex flex-col  gap-2 items-center justify-between p-4 bg-background text-foreground border-b-2 border-foreground md:flex-row">
        <h1 className="md:text-2xl text-lg font-bold">Health Advice Group</h1>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{
              rotate: isMenuOpen ? 180 : 0,
              transition: { duration: 0.2 },
            }}
            className="w-[24px] cursor-pointer md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0 md:m-auto"
            alt="Menu"
          >
            <ChevronDown className="w-[24px] md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0 md:m-auto" />
          </motion.div>
        </div>

        <ThemeSwitcher />
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
}
