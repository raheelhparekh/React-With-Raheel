import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)

  if(!user) return <div>Please Login</div>
  if(!user.username) return <div>Please enter username</div>
  if(!user.password) return <div>Please enter password</div>

  return <div>Welcome {user.username}</div>
}

export default Profile