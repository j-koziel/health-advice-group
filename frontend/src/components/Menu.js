import { NavLink } from "./NavLink";
import { menuLinks } from "../settings/links";

export function Menu() {
  const headerHeight = document.querySelector("#header").clientHeight;

  return (
    <div
      className={`absolute left-0 right-0 z-[999] flex flex-col items-center justify-center bg-background p-1`}
      style={{ top: `${headerHeight}px` }}
    >
      {menuLinks.map((link, i) => (
        <NavLink
          key={i}
          path={link.path}
          label={link.label}
          className="w-full text-center rounded-sm p-2 text-lg bg-background text-foreground hover:bg-foreground hover:text-background transition-colors"
        />
      ))}
    </div>
  );
}
