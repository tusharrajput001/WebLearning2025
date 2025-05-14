import { useState } from "react";
import useToggle from "./Hooks/useToggle";
import useForm from "./Hooks/useForm";

function App() {
  const [isVisible, toggle] = useToggle();
  const [formData, handleChange, resetForm] = useForm({ name: "", email: "" });

  return (
    <>
      {/* <div>
        <button onClick={toggle}>Toogle</button>
        {isVisible && <p>This is toggled.</p>}
      </div> */}
      <form>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="email" value={formData.email} onChange={handleChange} />
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
}

export default App;
