import { useState } from 'react'
export const Cart = () => {
    const[cartNumber,setCartNumber]=useState(0);
    const handleClick=()=>{
        setCartNumber(cartNumber+1);
    }
  return (
    <>
    <h1>
        Number of items in the Cart :{cartNumber}
        <button onClick={handleClick}>Add to Cart</button>
    </h1>
    </>
  )
}
