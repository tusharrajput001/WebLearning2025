import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Enter name or email");
      return;
    }
    console.log({ name , email });

    setEmail("")
    setGender("")
    setMessage("")
    setName("")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <label htmlFor="">
          Name:
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="">
          Email:
          <input
            type="text"
            value={email}
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="">
          message:
          <textarea
            type="text"
            value={message}
            name=""
            id=""
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <select
          name="gender"
          value={gender}
          id=""
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
