import { useEffect, useState } from "react";

const useDebouncedValue = (value: string, delay: number) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    const t = setTimeout(setState, delay, value);
    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);
  return state;
};

export default useDebouncedValue;
