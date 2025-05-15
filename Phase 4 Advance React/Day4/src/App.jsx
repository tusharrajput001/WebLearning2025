import { useState } from 'react'
import UserList from './UserList'
import CreatePost from './CreatePost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList/>
      <CreatePost/>
    </>
  )
}

export default App
