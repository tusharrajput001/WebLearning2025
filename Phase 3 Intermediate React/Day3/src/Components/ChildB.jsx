import React from "react";

function ChildB({ count, setCount }) {
  return (
    <>
      <h3>Child B</h3>
      <button onClick={() => setCount(count + 1)}>Increment from B</button>
    </>
  );
}

export default ChildB;
