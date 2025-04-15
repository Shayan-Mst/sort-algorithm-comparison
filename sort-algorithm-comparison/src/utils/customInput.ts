const handleCustomInput = (
    val: string ,
    setCustomInput: (value: React.SetStateAction<string>) => void,
    setArray: (value: React.SetStateAction<number[]>) => void
) => {
    setCustomInput(val);
    const parsed = val
      .split(",")
      .map((x) => parseInt(x.trim()))
      .filter((n) => !isNaN(n));
    setArray(parsed);
  };

  export default handleCustomInput;