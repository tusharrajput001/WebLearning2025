import { useState } from 'react'
import GithubFinder from './Components/GihubFinder'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GithubFinder/>
    </>
  )
}

export default App
