import { useState } from "react";
import { motion } from "framer-motion";

export function AccordionItem({ accordionItem }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-[600px] text-xl flex flex-col gap-y-2 my-2">
      <div
        onClick={() => setIsActive(!isActive)}
        className="w-full flex justify-between cursor-pointer"
      >
        <div>{accordionItem.title}</div>
        <div>+</div>
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: "easeIn" } }}
        >
          {accordionItem.content}
        </motion.div>
      )}
    </div>
  );
}
