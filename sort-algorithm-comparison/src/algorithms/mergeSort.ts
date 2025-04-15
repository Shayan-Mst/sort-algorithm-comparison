export async function mergeSort(
    array: number[],
    setArray: (arr: number[]) => void,
    setHighlighted: (hl: number[]) => void,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    delay = 200
  ) {
    async function merge(
      left: number[],
      right: number[],
      startIndex: number
    ): Promise<number[]> {
      let result: number[] = [];
      let i = 0, j = 0;
  
      while (i < left.length && j < right.length) {
        const leftIndex = startIndex + i;
        const rightIndex = startIndex + left.length + j;
  
        setHighlighted([leftIndex, rightIndex]);
        await new Promise((res) => setTimeout(res, delay));
  
        if (left[i] < right[j]) {
          result.push(left[i++]);
        } else {
          result.push(right[j++]);
        }
      }
  
      while (i < left.length) result.push(left[i++]);
      while (j < right.length) result.push(right[j++]);
  
      const newArray = [
        ...array.slice(0, startIndex),
        ...result,
        ...array.slice(startIndex + result.length),
      ];
  
      setArray([...newArray]);
      await new Promise((res) => setTimeout(res, delay));
  
      return result;
    }
  
    async function sort(start: number, end: number): Promise<number[]> {
      if (end - start <= 1) return array.slice(start, end);
  
      const mid = Math.floor((start + end) / 2);
      const left = await sort(start, mid);
      const right = await sort(mid, end);
      const merged = await merge(left, right, start);
  
      return merged;
    }
  
    await sort(0, array.length);
    setHighlighted([]);
    setIsSorting(false)
  }
  