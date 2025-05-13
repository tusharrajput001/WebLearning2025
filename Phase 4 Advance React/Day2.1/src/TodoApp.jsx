import { useContext, useState } from "react";
import { useTodo } from "./TodoContext";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodo(); //got from context

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return(
    <div>
        <h1>Todo App</h1>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <TodoList/>
    </div>
  )
};

export default TodoApp;