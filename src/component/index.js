// usecallback
import { useCallback } from 'react';
import React, {useState} from 'react'
import Child from '../component1';

export default function UseCallbackHooks() {
  const[countOne  , setCountOne] = useState(0)
  const[countTow, setCountTwo] = useState(0)

  function increment(){
    setCountOne(countOne+1)
  }
  function decrement(){
    setCountTwo(countTow-1)
  }
  const getItem=useCallback(()=>{
    console.log(countTow+1,countTow-1);
for(let i=0;i<1000000000;i++){}
console.log('gertitrm')
    return [countTow+1,countTow-1];
},[countTow])

  return (
    <div>
      <button onClick={increment}>click</button>
      <button onClick={decrement}>click</button>
      <p>{countOne} || {countTow}</p>
      <Child getItem={getItem}/>
    </div>
  )
}