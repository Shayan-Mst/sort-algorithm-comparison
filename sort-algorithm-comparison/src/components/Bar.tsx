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
        <div key={index} className="flex flex-col items-center">
          <span className="text-sm mb-1 text-gray-700">{value}</span>
          <motion.div
            layout
            animate={{
              height: `${value * 4}px`,
              backgroundColor: highlighted.includes(index)
                ? "#ef4444" // red
                : "#3b82f6", // blue
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-4 rounded mx-1"
          />
        </div>
      ))}
    </div>
  );
};

export default Bars;
