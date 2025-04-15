import React from "react";
import { motion } from "framer-motion";

interface BarsProps {
  array: number[];
  highlighted: number[];
}

const Bars: React.FC<BarsProps> = ({ array, highlighted }) => {
  return (
    <div className="flex items-end justify-center h-64 gap-1">
      {array.map((value, index) => (
        <motion.div
          key={index}
          layout
          animate={{
            height: `${value * 4}px`,
            backgroundColor: highlighted.includes(index)
              ? "#ef4444" // red-500
              : "#3b82f6", // blue-500
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-4 rounded"
        />
      ))}
    </div>
  );
};

export default Bars;
