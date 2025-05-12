import { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <>
      <Navbar />
      <Content />

      <AuthProvider>
        <h2>Login Logout system</h2>
        <LoginButton />
        <UserProfile />
      </AuthProvider>
    </>
  );
}

export default App;
