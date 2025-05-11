import React, { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  const MarkComplete = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const HandleAddTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    localStorage.setItem("todos", JSON.stringify(todo));
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const HandleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <h2>
        Add Tasks:
        <input
          type="text"
          placeholder="Add tasks"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={HandleAddTodo}>Add</button>
      </h2>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => MarkComplete(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => HandleDelete(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
