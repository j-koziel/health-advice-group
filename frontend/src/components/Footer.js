import { footerLinks } from "../settings/links";
import { NavLink } from "./NavLink";

export function Footer() {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-background text-foreground">
      <div className="h-[40%] w-full flex justify-center flex-wrap text-[100pt] md:text-[142pt] font-bold box-border border-b-2 select-none">
        <span>H</span>
        <span>e</span>
        <span>a</span>
        <span>l</span>
        <span>t</span>
        <span>h</span>
        <span className="mx-4"> </span>
        <span>A</span>
        <span>d</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span className="mx-5"> </span>
        <span>G</span>
        <span>r</span>
        <span>o</span>
        <span>u</span>
        <span>p</span>
      </div>
      <div className="h-[60%] w-full flex items-center justify-between text-xl">
        {footerLinks.map((link, i) => (
          <NavLink
            key={i}
            path={link.path}
            label={link.label}
            className="p-2 rounded-md hover:bg-foreground hover:text-background transition-colors"
          />
        ))}
      </div>
    </div>
  );
}
