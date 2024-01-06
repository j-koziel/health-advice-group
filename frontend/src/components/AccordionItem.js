import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function AccordionItem({ accordionItem }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-full flex flex-col gap-y-2 my-2">
      <div
        onClick={() => setIsActive(!isActive)}
        className="relative w-full flex justify-between cursor-pointer font-bold text-4xl"
      >
        <div>{accordionItem.title}</div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: isActive ? 180 : 0,
            transition: { duration: 0.3 },
          }}
          className="w-[24px] cursor-pointer md:absolute md:right-0 md:top-0 md:bottom-0 md:m-auto"
        >
          <ChevronDown className="w-[24px] md:absolute md:right-0 md:top-0 md:bottom-0 md:m-auto" />
        </motion.div>
      </div>
      <hr className="border-foreground" />
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "easeIn", duration: 0.5 },
          }}
          className="text-2xl"
        >
          {accordionItem.content}
        </motion.div>
      )}
    </div>
  );
}
