// useContext
import React, { useState,createContext } from 'react'
import  Component1  from '../component1'

const UserName = createContext()

export default function UseContextHooks() {

  const[user, setUser] = useState('Dipak singh chouhan')
  return (
    <div>
      <UserName.Provider value={user}>
      <h1>{`Hello ${user} !`}</h1>
      <Component1/>
      </UserName.Provider>
    </div>
  )
}
export {UserName};