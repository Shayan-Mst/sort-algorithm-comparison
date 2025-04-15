import { motion } from "framer-motion";

type BarProps = {
  height: number;
  active?: boolean;
};

export default function Bar({ height, active = false }: BarProps) {
  return (
    <motion.div
      animate={{
        height: `${height}%`,
        backgroundColor: active ? "#f43f5e" : "#3b82f6",
      }}
      transition={{ duration: 0.3 }}
      className="w-2 rounded-sm mx-0.5"
    />
  );
}
