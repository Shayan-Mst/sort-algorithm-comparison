export async function quickSort(
    array: number[],
    setArray: (arr: number[]) => void,
    setHighlighted: (hl: number[]) => void,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    setResetSignal: React.Dispatch<React.SetStateAction<boolean>>,
    delay = 200
  ) {
    async function partition(low: number, high: number): Promise<number> {
      const pivot = array[high];
      let i = low;
  
      for (let j = low; j < high; j++) {
        setHighlighted([j, high]);
        await new Promise(res => setTimeout(res, delay));
        if (array[j] < pivot) {
          [array[i], array[j]] = [array[j], array[i]];
          setArray([...array]);
          i++;
        }
      }
      [array[i], array[high]] = [array[high], array[i]];
      setArray([...array]);
      return i;
    }
  
    async function sort(low: number, high: number): Promise<void> {
      if (low < high) {
        const pi = await partition(low, high);
        await sort(low, pi - 1);
        await sort(pi + 1, high);
      }
    }
  
    await sort(0, array.length - 1);
    setHighlighted([]);
    setIsSorting(false)
    setResetSignal(false)
  }
  