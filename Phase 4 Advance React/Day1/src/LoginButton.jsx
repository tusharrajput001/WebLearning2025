import React from "react";
import { useAuth } from "./AuthContext";

const LoginButton = () => {
  const { login, isloggedIn, logout } = useAuth();
  return (
    <button onClick={isloggedIn ? logout : login}>
      {isloggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default LoginButton;
