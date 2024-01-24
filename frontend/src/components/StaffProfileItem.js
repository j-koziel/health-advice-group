import { motion } from "framer-motion";

export function StaffProfileItem({ name, title, profileImageUrl, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", delay } }}
      className="flex flex-col items-center"
    >
      <img src={profileImageUrl} alt={name} width={300} height={300} />
      <div className="text-4xl">{name}</div>
      <div className="text-2xl opacity-60">{title}</div>
    </motion.div>
  );
}
