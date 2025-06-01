import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
     setCount(count + 1);
  }
  function handleDecrease() {
    setCount((prev) => (prev > 0 ? prev -1 : 0));   
  }

  function handleReset() {
    setCount(0);
  }

  return { count, handleDecrease, handleIncrease, handleReset };
}
