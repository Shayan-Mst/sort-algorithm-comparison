export async function randomQuickSort(
    arr: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setHighlighted: React.Dispatch<React.SetStateAction<number[]>>,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    setResetSignal: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const array = [...arr];
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    async function quickSort(start: number, end: number) {
      if (start >= end) return;
  
      const pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
      const pivot = array[pivotIndex];
      [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
      let i = start;
  
      for (let j = start; j < end; j++) {
        setHighlighted([j, end]);
        await delay(300);
        if (array[j] < pivot) {
          [array[i], array[j]] = [array[j], array[i]];
          i++;
        }
        setArray([...array]);
      }
  
      [array[i], array[end]] = [array[end], array[i]];
      setArray([...array]);
      await delay(300);
  
      await quickSort(start, i - 1);
      await quickSort(i + 1, end);
    }
  
    await quickSort(0, array.length - 1);
    setHighlighted([]);
    setIsSorting(false);
    setResetSignal(false)
  }