import { useState } from 'react'
import Notes from './Components/Notes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Notes App</h1>
     <Notes/>
    </>
  )
}

export default App
