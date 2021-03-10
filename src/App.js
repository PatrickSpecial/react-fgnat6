import React, {useState} from 'react';

export default function App(){ 
const[ball, setBall] = useState(0)
const[toggleOn, setToggleOn] = useState(true)

if(toggleOn){ 
return (
  <div>
  <p>You clicked {ball} times</p>
  <button onClick={()=> setBall(ball + 1)}>Click Me</button>
  <button onClick={()=> setToggleOn(!toggleOn)}>
  {toggleOn ? 'ON' : 'OFF'}
  </button> 
  <h1>Keep Clicking</h1>
  </div>
)
}else{
  return (
  <div>
  <p>You clicked {ball} times</p>
  <button onClick={()=> setBall(ball + 1)}>Click Me</button>
  <button onClick={()=> setToggleOn(!toggleOn)}>
  {toggleOn ? 'ON' : 'OFF'}
  </button> 
  </div>
)
}
}