import { ChevronDown } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <div className="relative w-full h-fit flex flex-col md:flex-row gap-2 items-center justify-between p-4 bg-background text-foreground border-b-2 border-foreground">
      <h1 className="md:text-2xl text-lg font-bold">Health Advice Group</h1>
      <ChevronDown className="animate-bounce !order-last md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto" />
      <ThemeSwitcher />
    </div>
  );
}
