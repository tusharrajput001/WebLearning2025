import React from 'react'

function Model({show, onClose}) {
    if(!show) return null;
  return (
    <div>
        <h2>This is the Model</h2>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Model