import React from "react";
import { useRef, useState } from "react";
export default function App11() {
  const msgRef = useRef();
  const [color, setColor] = useState();
  const handleSubmit = () => {
    msgRef.current.style.color = color
  };
  return (
    <div><center>
      <h3>This is App11</h3>
      <p><b>Concept Name: </b>What is useRef</p>
      <p><b>Description: </b>useRef() is a hook in React that gives you a mutable reference object. That means it keeps the same object between renders without causing re-renders when its value changes.

</p><p>
        <input type="text" onChange={(e)=>setColor(e.target.value)}></input><br/>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <h4 ref={msgRef}>Hello World</h4>
      </p></center>
    </div>
  );
}