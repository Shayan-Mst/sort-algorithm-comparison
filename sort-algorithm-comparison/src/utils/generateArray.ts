const generateRandomArray = (length: number, min: number = 5, max: number = 50): number[] => {
    return Array.from({ length }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  };
  
  export default generateRandomArray;
  