import React from 'react'
import { useAuth } from './AuthContext'

function UserProfile() {
    const {isloggedIn } = useAuth();

  return (
    <div>
        {isloggedIn ? <h1>Welcome User</h1>  : <h1>Login bruhh</h1>}
    </div>
  )
}

export default UserProfile