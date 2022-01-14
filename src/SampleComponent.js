import React from "react";

export function SampleComponent({bgColor}){
  let styleObj = {
    backgroungColor: bgColor,
  };
  let a = 10;
  let b = 20;

  return(
    <>
    <div style={styleObj}>Heading</div>
    <div>value of a is : {a}</div>
    <div>value of b is : {b}</div>
    <div>
      sum of {a} and {b} is : {a * b}
      </div>
      </>
  );
}