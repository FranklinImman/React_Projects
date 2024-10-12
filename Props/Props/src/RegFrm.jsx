import React, { useState } from 'react'
import './RegFrm.css'
export const RegFrm = () => {
    const[user,setUser]=useState({
        name:"Franklin",
        age:23,
        Gender:"Male",
        IsMarried:true,
        Country:"India",
        About:"Write about something",
    })

    const handleChange=(e)=>{
        const value=e.target.type === "checkbox"?e.target.checked:e.target.value;
        setUser({...user,[e.target.name]:value});
    }

  return (
    <>
    <h1>User Details</h1>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.Gender}</td>
                </tr>
                <tr>
                    <td>Married Status</td>
                    <td>{user.IsMarried?"Yes":"No"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.Country}</td>
                </tr>
                <tr>
                    <td>About-{user.Gender=="Male"?"Him":"Her"}</td>
                    <td>{user.About}</td>
                </tr>
            </tbody>
        </table>
    <form action="details">
        <input type="text" placeholder='Name' name='name'value={user.name} onChange={(e)=>handleChange(e)}/>
        <input type="number" placeholder='age' name='age' value={user.age} onChange={(e)=>handleChange(e)}/>
        <div className='gender'>
            <label htmlFor="male">
                <input type="radio" name='Gender' id='male' checked={user.Gender=="Male"}value="Male" onChange={(e)=>handleChange(e)}/>
                Male
            </label>
            <label htmlFor="female">
                <input type="radio" name='Gender' id='female' checked={user.Gender=="Female"}value="Female" onChange={(e)=>handleChange(e)}/>
                Female
            </label>
        </div>
        <div>
            <label htmlFor="is Married">
                <input type="checkbox" name='IsMarried' checked={user.IsMarried}onChange={(e)=>handleChange(e)}/>
                IsMarried
            </label>
        </div>
        <div>
            <label htmlFor="country">Select Country</label>
            <select name="Country" id='Country' value={user.Country} onChange={handleChange}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        </div>
        <div>
            <textarea name="About" id="bio" cols="30" rows="5" placeholder='About you' value={user.About} onChange={handleChange} ></textarea>
        </div>
    </form>
    </>
  )
}
