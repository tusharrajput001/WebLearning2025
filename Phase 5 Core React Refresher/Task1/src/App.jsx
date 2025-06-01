import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

function App() {
  const counter = useCounter();

  return (
    <>    
      <h1>{counter.count  }</h1>
      <div>
        <button onClick={counter.handleIncrease}>Inc</button>
        <button onClick={counter.handleReset}>Reset</button>
        <button onClick={counter.handleDecrease}>Dec</button>
      </div>
    </>
  );
}

export default App;
