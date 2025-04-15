export async function selectionSort(
    array: number[],
    setArray: (arr: number[]) => void,
    setHighlighted: (hl: number[]) => void,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    setResetSignal: React.Dispatch<React.SetStateAction<boolean>>,
    delay = 200
  ) {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        setHighlighted([i, j]);
        await new Promise(res => setTimeout(res, delay));
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        setArray([...array]);
        await new Promise(res => setTimeout(res, delay));
      }
    }
  
    setHighlighted([]);
    setIsSorting(false)
    setResetSignal(false)
  }
  