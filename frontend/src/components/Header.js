import { CircleUser } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "../components/NavLink";

export function Header() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  return (
    <div className="min-w-full h-fit flex flex-col" id="header">
      <div className="relative w-full h-fit flex flex-col gap-2 items-center justify-between p-4 bg-background text-foreground border-b-2 border-foreground md:flex-row">
        <h1
          className="bg-transparent border-none text-lg font-bold cursor-pointer transition-all hover:drop-shadow-lg md:text-2xl"
          onClick={() => navigate("/")}
        >
          Health Advice Group
        </h1>
        <div className="flex items-center gap-x-2">
          {accessToken ? (
            <NavLink path="/dashboard">
              <CircleUser />
            </NavLink>
          ) : (
            <div>
              <NavLink path="/sign-in" className="">
                Sign in
              </NavLink>
            </div>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
