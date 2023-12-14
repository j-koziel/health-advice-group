import { footerLinks } from "../settings/links";
import { NavLink } from "./NavLink";

export function Footer() {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="w-full flex justify-between text-9xl font-bold box-border">
        <span>H</span>
        <span>e</span>
        <span>a</span>
        <span>l</span>
        <span>t</span>
        <span>h</span>
        <span> </span>
        <span>A</span>
        <span>d</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span> </span>
        <span>G</span>
        <span>r</span>
        <span>o</span>
        <span>u</span>
        <span>p</span>
      </div>
      <div className="flex items-center justify-between">
        {footerLinks.map((link, i) => (
          <NavLink key={i} path={link.path} label={link.label} />
        ))}
      </div>
    </div>
  );
}
