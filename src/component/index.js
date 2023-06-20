
import React, { useState } from 'react'

export default function UseStateHooks() {
  const [color, setColor] = useState('red')
  function handalBlue(){
    setColor('blue');
  }
  function handalGreen(){
    setColor('green');
 }
 function handalRed(){
  setColor('red');
}
function handalBlack(){
  setColor('black');
}
function handalPink(){
  setColor('pink');
}
  return (
    <div>
       <h1>My favorite color is {color} !</h1>
       <button onClick={handalBlue}  style={{background:'blue', color:'blue', margin:'10px' }}>Blue</button>
       <button onClick={handalGreen} style={{ background:'green',color:'green', margin:'10px'  }}>Green</button>
       <button onClick={handalRed} style={{ background:'red',color:'red',margin:'10px'  }}>Red</button>
       <button onClick={handalBlack} style={{ background:'black',color:'black',margin:'10px'  }}>Black</button>
       <button onClick={handalPink}   style={{ background:'pink',color:'pink',margin:'10px'  }}>Pink</button>
    </div>
  )
}
