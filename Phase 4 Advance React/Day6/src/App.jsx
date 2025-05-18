import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Components/Home";
import New from "./Components/New";
import Edit from "./Components/Edit";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>BlogBuddy</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
