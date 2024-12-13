import React, { useState } from 'react'

const Clickevent = () => {
    const [count,setCount]=useState(0)
    
    const increments=()=>{
        setCount(count+1)
    }
    const decrements=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increments}>increment</button>
        <button onClick={decrements}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Clickevent