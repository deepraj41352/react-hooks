// useEffect
import React, { useEffect, useState } from 'react'

export default function UseEffectHooks() {
  
  const[count, setCount] = useState(0)
  const[calculation, setCalculation] = useState(0)
  function handalClick(){
    setCount(count+1)
  }
  useEffect(()=>{
    setCalculation(count*2)
  },[count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={handalClick}>Click</button>
      <p>{calculation}</p>
    </div>
  )
}
