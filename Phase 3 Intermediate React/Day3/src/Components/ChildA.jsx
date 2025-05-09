import React from "react";

function ChildA({ count, setCount }) {
  return (
    <>
      <h3>Child A</h3>
      <button onClick={() => setCount(count + 1)}>Increment from A</button>
    </>
  );
}

export default ChildA;
