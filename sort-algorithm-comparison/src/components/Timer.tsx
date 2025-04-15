import React, { useEffect, useState, useRef } from "react";

interface TimerProps {
  isSorting: boolean;
  resetSignal: boolean;
}

const Timer: React.FC<TimerProps> = ({ isSorting, resetSignal }) => {
  const [time, setTime] = useState(0); // time in milliseconds
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSorting) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 100);
      }, 100);
    } else if (!isSorting && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
       
      }
    };
  }, [isSorting]);

  useEffect(() => {
    if (resetSignal) {
      setTime(0);
    }
  }, [resetSignal]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10); // show 2 digits

    if (minutes > 0) {
      return `${minutes}:${seconds.toString().padStart(2, "0")} s`;
    } else {
      return `${seconds}:${milliseconds.toString().padStart(2, "0")} s`;
    }
  };

  return (
    <div className="text-lg font-semibold text-gray-700 mt-2">
      Time Elapsed : {formatTime(time)}
    </div>
  );
};

export default Timer;
