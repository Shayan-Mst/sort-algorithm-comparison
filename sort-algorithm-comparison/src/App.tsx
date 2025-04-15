import { useState } from "react";
import Bars from "./components/Bar";
import Controls from "./components/Control";
import { bubbleSort } from "./algorithms/bubbleSort";

const App = () => {
  const [array, setArray] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [customInput, setCustomInput] = useState("");

  const generateRandomArray = () => {
    const newArr = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 50) + 1
    );
    setArray(newArr);
  };

  const handleStart = () => {
    bubbleSort(array, setArray, setHighlighted);
  };

  const handleCustomInput = (val: string) => {
    setCustomInput(val);
    const parsed = val
      .split(",")
      .map((x) => parseInt(x.trim()))
      .filter((n) => !isNaN(n));
    setArray(parsed);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Bubble Sort Visualizer</h1>
      <Bars array={array} highlighted={highlighted} />
      <Controls
        onGenerate={generateRandomArray}
        onStart={handleStart}
        onCustomChange={handleCustomInput}
        customInput={customInput}
      />
    </div>
  );
};

export default App;
