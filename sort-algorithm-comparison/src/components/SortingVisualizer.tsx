import { useState } from "react";
import Bars from "./Bar";
import Controls from "./Control";
import { bubbleSort } from "./../algorithms/bubbleSort";
import { quickSort } from "../algorithms/quickSort";
import { heapSort } from "../algorithms/heapSort";
import { selectionSort } from "../algorithms/selectionSort";
import { mergeSort } from "../algorithms/mergeSort";
import generateRandomArray from "./../utils/generateArray";


const SortingVisualizer = () => {
    const [array, setArray] = useState<number[]>([]);
    const [highlighted, setHighlighted] = useState<number[]>([]);
    const [customInput, setCustomInput] = useState("");
    const [sortAlg,setSortAlg] = useState('Bubble');
    const [flag,setFlag] = useState("");
  
    const generateRandomArrayFunc = () => {
     
      const randomArray = generateRandomArray(20)
      setArray(randomArray);
    };

    const HandleAlgorithm = (e: any) => {setFlag(e.target.id)}
  
  
    const handleStart = () => {
      if(flag === "1") bubbleSort(array, setArray, setHighlighted);
      else if(flag === "2") mergeSort(array, setArray, setHighlighted);
      else if(flag === "3") quickSort(array, setArray, setHighlighted);
      else if(flag === "4") heapSort(array, setArray, setHighlighted);
      else if(flag === "5") selectionSort(array, setArray, setHighlighted);
      
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
    
   
    <div className="min-h-screen grid items-end bg-gray-100 p-8 text-center">
    <div className="self-start">
        <h1 className="text-2xl font-bold text-center text-slate-700 inline"> {sortAlg} Sort Visualizer</h1>
        <select
          value={sortAlg}
         
          onChange={(e)=>setSortAlg(e.target.value)}
          className="px-3 mx-2 py-2 rounded bg-gray-700 text-white text-center"
        >
          <option onClick={HandleAlgorithm} id="1" value="Bubble">Bubble Sort</option>
          <option onClick={HandleAlgorithm} id="2" value="Merge">Merge Sort</option>
          <option onClick={HandleAlgorithm} id="3" value="Quick">Quick Sort</option>
          <option onClick={HandleAlgorithm} id="4" value="Heap">Heap Sort</option>
          <option onClick={HandleAlgorithm} id="5" value="Selection">Selection Sort</option>
        </select>

        </div>
      <Bars array={array} highlighted={highlighted} />
      <Controls
        onGenerate={generateRandomArrayFunc}
        onStart={handleStart}
        onCustomChange={handleCustomInput}
        customInput={customInput}
      />
    </div>
    
  );
};

export default SortingVisualizer;
