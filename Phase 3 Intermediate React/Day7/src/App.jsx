import { useState } from 'react'
import GithubFinder from './Components/GithubFinder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GithubFinder/>
    </>
  )
}

export default App
