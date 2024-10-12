import React, { useEffect, useState } from 'react'
import './Advice.css'
export const Advice = () => {
    const[advice,setAdvice]=useState("Please Click Button to Get Advice")
    const [loading,setLoading]=useState(true)
    const [count,setCount]=useState(0)
    async function handleChange(){
        setLoading(true)
        try{
            const url=await fetch("'https://dummyjson.com/quotes'")
            const res=await url.json()
            
            setAdvice(res.slip.advice)
            setCount((e)=>e+1);

        }catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }

    }
    useEffect(function(){
        handleChange()
    },[]);
  return (
    <>
    <div>
        <h3>
            {loading==true?"Please Wait...":advice}
        </h3>

        <button onClick={handleChange}>Get Advice</button>
        <Counter count={count}/>
    </div>
    </>
  )
}

function Counter(props){
    return (
        <p>You have Seen {props.count} pieces of Advice</p>
    )
}