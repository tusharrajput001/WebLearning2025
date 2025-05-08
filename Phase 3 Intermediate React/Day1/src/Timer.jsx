import React, { useEffect, useState } from "react";

function TimerCnt() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);
  

  return <h1>I've Rendered {count} times!</h1>;
}

function Timer() {
  return (
    <div>
      <TimerCnt />
    </div>
  );
}

export default Timer;
