import { NavLink } from "./NavLink";
import { menuLinks } from "../settings/links";
import { motion } from "framer-motion";

export function Menu() {
  const headerHeight = document.querySelector("#header").clientHeight;

  return (
    <motion.div
      initial={{ top: 0, opacity: 0 }}
      animate={{
        top: headerHeight,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.2 },
      }}
      exit={{ top: 0, opacity: 0 }}
      className={`absolute left-0 right-0 z-[999] flex flex-col items-center justify-center bg-background p-1`}
      // style={{ top: `${headerHeight}px` }}
    >
      {menuLinks.map((link, i) => (
        <NavLink
          key={i}
          path={link.path}
          label={link.label}
          className="w-full text-center rounded-sm p-2 text-lg bg-background text-foreground hover:bg-foreground hover:text-background transition-colors"
        />
      ))}
    </motion.div>
  );
}
