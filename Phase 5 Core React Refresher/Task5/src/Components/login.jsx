import React, { useState } from "react";

function Login() {
  const LoginIds = [{ email: "tusharr0491@gmail.com", password: "1234" }];

  const [login, setlogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email == "tusharr0491@gmail.com" && password == "1234") {
      setlogin(true);
      alert("Login successfull");
    } else {
      setlogin(false);
      alert("Login Failed");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="">
          Email:{" "}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="">
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </label>{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
