import React from "react";

interface ControlsProps {
  onGenerate: () => void;
  onStart: () => void;
  onCustomChange: (val: string) => void;
  customInput: string;
}

const Controls: React.FC<ControlsProps> = ({
  onGenerate,
  onStart,
  onCustomChange,
  customInput,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <input
        type="text"
        placeholder="e.g. 5,10,15,7"
        value={customInput}
        onChange={(e) => onCustomChange(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <div className="flex gap-4">
        <button
          onClick={onGenerate}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Generate Random Array
        </button>
        <button
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Start Sorting
        </button>
      </div>
    </div>
  );
};

export default Controls;
