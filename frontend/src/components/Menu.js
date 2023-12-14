import { NavLink } from "./NavLink";
import { menuLinks } from "../settings/links";

export function Menu() {
  return (
    <div className="flex flex-col items-center justify-center bg-background mx-1">
      {menuLinks.map((link, i) => (
        <NavLink
          key={i}
          path={link.path}
          label={link.label}
          className="w-full text-center rounded-sm p-2 text-lg bg-background text-foreground hover:bg-primary hover:text-background transition-colors"
        />
      ))}
    </div>
  );
}
