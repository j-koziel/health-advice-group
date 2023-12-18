import { footerLinks } from "../settings/links";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
      className="h-screen w-full flex flex-col items-center bg-fixed bg-center bg-no-repeat bg-cover bg-altBackground text-altForeground"
      id="footer"
    >
      <div
        className="w-full flex justify-center flex-wrap text-[34pt] font-bold box-border select-none md:text-[140pt]"
        id="footer-header"
      >
        {/* Janky way to make the text span the width of the screen */}
        <span>H</span>
        <span>e</span>
        <span>a</span>
        <span>l</span>
        <span>t</span>
        <span>h</span>
        <span className="mx-2 md:mx-5"> </span>
        <span>A</span>
        <span>d</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span className="mx-2 md:mx-5"> </span>
        <span>G</span>
        <span>r</span>
        <span>o</span>
        <span>u</span>
        <span>p</span>
      </div>
      <hr className="w-full bg-foreground" id="footer-seperator" />
      <div className="w-full h-[80%] flex flex-col items-center justify-between text-xl py-10 md:px-10 md:h-[70%] md:flex-row md:justify-between md:text-3xl">
        {footerLinks.map((link, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: (i + 1) / 8 } }}
          >
            <NavLink
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
