import { useState } from "react";
import Bars from "./Bar";
import Controls from "./Control";
import { bubbleSort } from "./../algorithms/bubbleSort";
import { quickSort } from "../algorithms/quickSort";
import { heapSort } from "../algorithms/heapSort";
import { selectionSort } from "../algorithms/selectionSort";
import { mergeSort } from "../algorithms/mergeSort";
import generateRandomArray from "./../utils/generateArray";
import handleCustomInput from "../utils/customInput";
import Timer from "./Timer";
import { countingSort } from "../algorithms/countingSort";
import { insertionSort } from "../algorithms/insertionSort";


const SortingVisualizer = () => {

    const [array, setArray] = useState<number[]>([]);
    const [highlighted, setHighlighted] = useState<number[]>([]);
    const [customInput, setCustomInput] = useState("");
    const [sortAlg,setSortAlg] = useState('Bubble');
    const [flag,setFlag] = useState("1");
    const [isSorting, setIsSorting] = useState(false);
    const [resetSignal, setResetSignal] = useState(false);
    

  
    const generateRandomArrayFunc = () => {
     
     
      const randomArray = generateRandomArray(20)
      setArray(randomArray);
    };

    const HandleAlgorithm = (e: any) => {
      
      setFlag(e.target.id)
      setResetSignal(true)
    
    
    }
  
  
    const handleStart = () => {

      setIsSorting(true);
     
      if(flag === "1") bubbleSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "2") mergeSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "3") quickSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "4") heapSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "5") selectionSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "6") countingSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "7") insertionSort(array, setArray, setHighlighted ,setIsSorting);
      else if(flag === "8") selectionSort(array, setArray, setHighlighted ,setIsSorting);
      
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
          <option onClick={HandleAlgorithm} id="6" value="Counting">Counting Sort</option>
          <option onClick={HandleAlgorithm} id="7" value="Insertion">Insertion Sort</option>
        </select>
        <Timer isSorting={isSorting} resetSignal={resetSignal} />

        </div>
      <Bars array={array} highlighted={highlighted} />
      <Controls
        onGenerate={generateRandomArrayFunc}
        onStart={handleStart}
        onCustomChange={(e)=>handleCustomInput(e,setCustomInput,setArray)}
        customInput={customInput}
        isSorting={isSorting}
      />
    </div>
    
  );
};

export default SortingVisualizer;
