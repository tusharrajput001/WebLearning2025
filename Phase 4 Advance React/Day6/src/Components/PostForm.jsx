import React, { useState, useEffect } from "react";

function PostForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialData.title) setTitle(initialData.title);
    if (initialData.message) setMessage(initialData.message);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Title:
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Message:
        <input
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
