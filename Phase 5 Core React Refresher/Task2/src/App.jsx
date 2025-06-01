import { useState } from "react";
import "./Styles.css";
import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div id="colorcheckr"></div>
      <h1>Color Picker</h1>
      <label for="color-select">Choose Color</label>
      <select 
        name="color"
        id="color-select"
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">--Please choose an option-- </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
}

export default App;
