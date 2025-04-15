export async function countingSort(
    arr: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setHighlighted: React.Dispatch<React.SetStateAction<number[]>>,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    setResetSignal: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    const array = [...arr];
    const max = Math.max(...array);
    const min = Math.min(...array);
    const range = max - min + 1;
    const count = Array(range).fill(0);
    const output = Array(array.length).fill(0);
  
    for (let i = 0; i < array.length; i++) {
      count[array[i] - min]++;
      setHighlighted([i]);
      await delay(300);
    }
  
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = array.length - 1; i >= 0; i--) {
      output[count[array[i] - min] - 1] = array[i];
      count[array[i] - min]--;
      setArray([...output]);
      setHighlighted([i]);
      await delay(300);
    }
  
    setHighlighted([]);
    setArray([...output]);
    setIsSorting(false);
    setResetSignal(false)
  }
  