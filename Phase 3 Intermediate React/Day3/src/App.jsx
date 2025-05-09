import { useState } from 'react'
import ChildA from './Components/ChildA'
import ChildB from './Components/ChildB'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Shared Counter : {count}</h2>
      <ChildA  count={count} setCount={setCount}/>
      <ChildB  count={count} setCount={setCount}/>
    </>
  )
}

export default App
