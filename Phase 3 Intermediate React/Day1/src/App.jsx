import { useEffect, useState } from "react";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  //mounted UseEffect
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  //useEffect on state update
  useEffect(() => {
    console.log("Count Updated : ", count);
  },[count]);

  //cleanupFuction
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup done");
    };
  }, [count]);

  return (
    <>
    <button onClick={()=> setCount(count + 1)}>Count : {count}</button>
      <Timer />
    </>
  );
}

export default App;
