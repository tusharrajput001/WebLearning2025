import { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Content/>
    </>
  )
}

export default App
