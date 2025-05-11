import React from "react";
import UserCard from "./UserCard";
import { useState } from "react";

function GithubFinder() {
  const [input, setInput] = useState("");
  const [ApiData, setApiData] = useState("");

  async function FetchUser(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    if (!response.ok) {
      throw new error("No user found");
    }
    return await response.json();
  }

  const FindUser = async () => {
    if (!input) return;

    try {
      const data = await FetchUser(input);
      setApiData(data);
      console.log(ApiData);
    } catch (err) {
        throw new Error("No user Found")
    }
  };

  return (
    <>
      <h1>Find Github Users</h1>
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

export default GithubFinder;
