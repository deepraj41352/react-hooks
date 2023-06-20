import React, { useContext } from 'react'
import { UserName } from '../component';

export default function Component5() {
    const user = useContext(UserName);
  return (
    <div>
      component5
      <h1>{`Hello ${user} again !`}</h1>
    </div>
  )
}
