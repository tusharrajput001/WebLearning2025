
import { useState } from "react";

const LoginCtrl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back Buddy" : "Please Log in"}</h2>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

const Greeting = () => {
  const [isMorning, setIsMorning] = useState(true);

  return (
    <div>
      <h1>{isMorning ? "Good Morning" : "Good Night"}</h1>
      <button onClick={() => setIsMorning(!isMorning)}>Toogle Time</button>
    </div>
  );
};

function App() {
  return (
    <>
      <LoginCtrl/>
      <Greeting />
    </>
  );
}

export default App;
