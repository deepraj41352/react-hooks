// useMemo
import React, { useMemo, useState } from 'react'

export default function UseCallbackHooks() {
  const [countOne, setCountOne] = useState(0)
    const [countTow, setCountTwo] = useState(0)

    function increment(){
        setCountOne(countOne+1);
    }

    function decrement(){
        setCountTwo(countTow-1);
    }

    const isEeven=useMemo(()=>{

        for(let i=0;i<1000000000;i++){}
        return countOne%2===0;
    },[countOne])
   

    return (
    <div>
      <button onClick={increment}>count One {countOne}</button> {isEeven?'even':'odd'}<br></br>
      <button onClick={decrement}>count Two {countTow}</button>
    </div>
  )
}
