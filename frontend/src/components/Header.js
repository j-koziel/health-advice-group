import { ChevronDown } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-4 bg-background text-foreground border-b-2 border-foreground">
      <h1 className="text-2xl font-bold">Health Advice Group</h1>
      <ChevronDown className="absolute left-0 right-0 mx-auto animate-bounce" />
      <ThemeSwitcher />
    </div>
  );
}
