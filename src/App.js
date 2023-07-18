import React from "react";
import "./style.css";
import {useState, useEffect} from "react";

export default function App() {
  const[changeColors , setChangeColors] = useState("")

  function handleClick(){
const changeColors = "#" + Math.random().toString(16).slice(2,8);

setChangeColors(changeColors)


  }

  useEffect(()=>{
document.body.style.backgroundColor = changeColors


  }, [changeColors])
  return (
    <div>
      <button onClick={handleClick} className="btn"> click me to change color</button>
    </div>
  );
}
