import { useState } from 'react'
import { TodoProvider } from './TodoContext'
import TodoApp from './TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoProvider>
      <TodoApp/>
    </TodoProvider>
     
    </>
  )
}

export default App
