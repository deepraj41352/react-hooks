// useContext
import React from 'react'
import { useRef } from "react";

export default function UseContextHooks() {


  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}