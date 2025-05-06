import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build something",
    "deploy it",
    "sell it",
  ]);
  const [newTasks, setNewTasks] = useState("");

  return (
    <>
      <h1>My Tasks</h1>
      <input
        type="text"
        value={newTasks}
        onChange={(e) => setNewTasks(e.target.value)}
        placeholder="Enter New Tasks"
      />
      <button
        onClick={() => {
          if (newTasks.trim()) {
            setTasks([...tasks, newTasks]);
            setNewTasks("");
          }
        }}
      >
        Add Tasks
      </button>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
