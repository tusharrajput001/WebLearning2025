import React, { useState } from "react";
import UserCard from "./UserCard";

function GihubFinder() {
  const [input, setInput] = useState("");
  const [ApiData, setApiData] = useState("");

  async function FetchUser(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    return await response.json();
  }

  const FindUser = async () => {
    if (!input) return;
    try { 
      const data = await FetchUser(input);
      setApiData(data);
      console.log(data);
    } catch (error) {
      throw new Error("No user found");
      console.log(error);
    }
  };

  return (
    <>
      <h1>Find Github User</h1>
      <label>
        {" "}
        Name :{" "}
        <input
          type="text"
          value={input}
          placeholder="name"
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        <button onClick={FindUser}>Search</button>
      </label>
      <UserCard data={ApiData} />
    </>
  );
}

export default GihubFinder;
