import { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{display:"flex", flexWrap:"flex", gap:'18px'}}>
      <Greeting name={"Tushar"} message={"23"} />
      <Greeting name={"Tushar"} message={"23"} />
      <Greeting name={"Tushar"} message={"23"} />
      <Greeting name={"Tushar"} message={"23"} />
      <Greeting name={"Tushar"} message={"23"} />
    </div>
    </>
  );
}

export default App;
