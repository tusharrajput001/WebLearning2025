import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function Decrement() {
    if (count == 0) {
      setCount(0);
      
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={Decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
