import { useNavigate } from "react-router-dom";

import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="min-w-full h-fit flex flex-col" id="header">
      <div className="relative w-full h-fit flex flex-col gap-2 items-center justify-between p-4 bg-background text-foreground border-b-2 border-foreground md:flex-row">
        <h1
          className="bg-transparent border-none text-lg font-bold cursor-pointer transition-all hover:drop-shadow-lg md:text-2xl"
          onClick={() => navigate("/")}
        >
          Health Advice™
        </h1>
        <div className="flex items-center gap-x-2">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
