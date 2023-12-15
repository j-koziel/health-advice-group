import { footerLinks } from "../settings/links";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {duration: 1, ease: "easeIn"} }}
      className="h-screen w-full flex flex-col items-center bg-fixed bg-center bg-no-repeat bg-cover bg-altBackground text-altForeground"
    >
      <div className="w-full flex justify-center flex-wrap text-[100pt] md:text-[140pt] font-bold box-border select-none">
        <span>H</span>
        <span>e</span>
        <span>a</span>
        <span>l</span>
        <span>t</span>
        <span>h</span>
        <span className="mx-5"> </span>
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
      <hr className="w-full bg-foreground" />
      <div className="h-[70%] w-full flex flex-col md:flex-row items-center justify-between text-3xl px-10">
        {footerLinks.map((link, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: (i + 1) / 8 } }}
          >
            <NavLink
              key={i}
              path={link.path}
              label={link.label}
              className="p-3 m-2 rounded-md hover:bg-altForeground hover:text-altBackground transition-colors"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>

  );
}
