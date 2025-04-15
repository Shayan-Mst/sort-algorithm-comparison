export const bubbleSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setHighlighted: React.Dispatch<React.SetStateAction<number[]>>,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const arr = [...array];
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setHighlighted([j, j + 1]);
        await delay(300);
  
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
    }
  
    setHighlighted([]);
    setIsSorting(false)
  };
  