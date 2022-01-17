import React, {useState,useEffect} from "react";
import "./style.css";

export default function comp(){

  const [count ,setCount] = useState(0)

  // v1
  useEffect (()=>{
    console.log("render")
  })
  // v2
  useEffect (()=>{
    console.log('runs only once after first render');
    return()=>{
      console.log("unmount")
    }
  }, []);
  // v3
  useEffect(()=>{
    console.log ("runs when the dependency array state changes");
  })
return (
  <div>
    <button onClick = { () => setCount(count -1)}>-</button>
    {count}
    <button onClick = { () => setCount(count +1)}>+</button>
  </div>
)