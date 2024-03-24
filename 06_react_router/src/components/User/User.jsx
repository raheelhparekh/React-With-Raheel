import React from 'react'
import { useParams } from 'react-router-dom'
/*
    - useParams: It is a hook that is used to access the parameters of the current route.
    voh user ke id ko access karne ke liye useParams and dynamic routing ka use kiya gaya hai.
    */

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-2xl text-center text-white p-3'>User : {userid}</div>
  )
}

export default User