"use client";

import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const user = {
    name:"Tushar Rajput",
    email:"tusharr0491@gmail.com"
  }
  return (
    <>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      {isLoggedIn ? <p>Welcome Tushar to your account</p> : <p>Please Login</p>}

      {isLoggedIn && (
        <div>
          <p><strong>{user.name}</strong></p>
          <p><strong>{user.email}</strong></p>
        </div>
      )}
    </>
  );
}
