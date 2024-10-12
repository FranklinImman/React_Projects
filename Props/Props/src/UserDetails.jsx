import React from 'react'
import { useState } from 'react'
export const UserDetails = () => {
    const [user,setUser]=useState({"name":"Franklin","age":23})
//   const changeHandler=(e)=>{
//     // const newState={...user};
//     // newState.name=e
//     // setUser(newState)
//     setUser((oldState)=>{
//         return {...oldState,name:e}
//     })
//   }
//   const changeAge=(e)=>{
//     setUser((oldState)=>{
//         return {...oldState,age:e}
//     })
//   }
    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
  return (
   <>
    <h1>User Details</h1>
    <h2>
        {user.name},
        {user.age}
    </h2>
    <form action="name">
        <input type="text" placeholder='Enter your Name' onChange={(e)=>changeHandler(e)} value={user.name} name='name'/>
        <input type="text" placeholder='Enter your Age' onChange={(e)=>changeHandler(e)} value={user.age} name='age'/>

    </form>
   </>
  )
}
