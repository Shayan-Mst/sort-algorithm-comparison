export async function heapSort(
    array: number[],
    setArray: (arr: number[]) => void,
    setHighlighted: (hl: number[]) => void,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    delay = 200
  ) {
    async function heapify(n: number, i: number): Promise<void> {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && array[left] > array[largest]) largest = left;
      if (right < n && array[right] > array[largest]) largest = right;
  
      if (largest !== i) {
        setHighlighted([i, largest]);
        [array[i], array[largest]] = [array[largest], array[i]];
        setArray([...array]);
        await new Promise(res => setTimeout(res, delay));
        await heapify(n, largest);
      }
    }
  
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(n, i);
    }
  
    for (let i = n - 1; i > 0; i--) {
      setHighlighted([0, i]);
      [array[0], array[i]] = [array[i], array[0]];
      setArray([...array]);
      await new Promise(res => setTimeout(res, delay));
      await heapify(i, 0);
    }
  
    setHighlighted([]);
    setIsSorting(false)
  }
  