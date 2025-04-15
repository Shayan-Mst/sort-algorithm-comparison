export async function insertionSort(
    arr: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setHighlighted: React.Dispatch<React.SetStateAction<number[]>>,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
    setResetSignal: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const array = [...arr];
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
        setArray([...array]);
        setHighlighted([j + 1, j + 2]);
        await delay(300);
      }
      array[j + 1] = key;
      setArray([...array]);
      setHighlighted([j + 1]);
      await delay(300);
    }
    setHighlighted([]);
    setIsSorting(false);
    setResetSignal(false)
  }