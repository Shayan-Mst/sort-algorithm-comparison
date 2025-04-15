import { useState, useEffect } from 'react';

const BAR_COLOR = '#60a5fa'; // Tailwind blue-400
const SWAP_COLOR = '#f87171'; // Tailwind red-400

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [barColors, setBarColors] = useState<string[]>([]);

  useEffect(() => {
    generateRandomArray();
  }, []);

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 10);
    setArray(newArray);
    setBarColors(new Array(newArray.length).fill(BAR_COLOR));
  };

  const handleCustomInput = () => {
    const parsed = customInput.split(',').map(Number).filter(n => !isNaN(n));
    setArray(parsed);
    setBarColors(new Array(parsed.length).fill(BAR_COLOR));
  };

  const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const colors = [...barColors];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        colors[j] = SWAP_COLOR;
        colors[j + 1] = SWAP_COLOR;
        setBarColors([...colors]);
        await sleep(200);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }

        colors[j] = BAR_COLOR;
        colors[j + 1] = BAR_COLOR;
        setBarColors([...colors]);
      }
    }

    setIsSorting(false);
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button disabled={isSorting} onClick={generateRandomArray}>Random Array</button>
        <input
          className="border rounded px-2 py-1"
          placeholder="e.g. 30,20,10"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          disabled={isSorting}
        />
        <button disabled={isSorting} onClick={handleCustomInput}>Set Custom Array</button>
        <button disabled={isSorting} onClick={bubbleSort}>Start Sorting</button>
      </div>

      <div className="mt-6 flex items-end h-64 gap-1 w-full max-w-4xl justify-center">
        {array.map((val, idx) => (
         <div
         key={idx}
         style={{ height: `${val * 2}px`, backgroundColor: barColors[idx] }}
         className="w-4 rounded-t"
         title={val.toString()}
       />
       
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
