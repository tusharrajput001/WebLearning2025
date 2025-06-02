import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Age: age,
    };

    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <br />
        <label htmlFor="phone">
          Phone{" "}
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>{" "}
        <br />
        <label htmlFor="age">
          Age{" "}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
