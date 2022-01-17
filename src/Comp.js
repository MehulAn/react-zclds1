import React, {useState,useEffect} from "react";
import "./style.css";

export default function comp(){

  const [count ,setCount] = useState(0)

  // v1
  useEffect (()=>{
    console.log("render")
  });
  // v2
  useEffect (()=>{
    console.log('runs only once after first render');
    return()=>{
      
  }, []);
  // v3
  useEffect(()=>{
    console.log ("runs when the dependency array state changes");
  }, [count]);
  
  // v4
  useEffect(()=>{
    return()=>{
      console.log
    }
  })
