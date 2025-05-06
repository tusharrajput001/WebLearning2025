import React from 'react'

function TaskItem({task}) {
  return (
    <li style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{task}</li>
  )
}

export default TaskItem