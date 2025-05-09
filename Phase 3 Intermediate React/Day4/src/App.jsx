import { useState } from "react";
import Model from "./Model";

function App() {
  const [isModelOpen, setisModelOpen] = useState(false);

  const handleOpenModal = () => setisModelOpen(true);
  const handleCloseModal = () => setisModelOpen(false);

  return (
    <>
      <h2>Parent Component</h2>
      <button onClick={handleOpenModal}>Show Model</button>
      <Model show={isModelOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
