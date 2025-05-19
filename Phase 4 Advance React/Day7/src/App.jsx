import { useState } from "react";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Dashboard from "./Pages/Dashboard";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";

export default App;
