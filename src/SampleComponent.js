import React from 'react';

export default function SampleComponent() {
  let styleObj = {
    backgroungColor: bgColor,
  };
  let obj = {
    name: 'mehul',
  };
  let arr = [1, 2, 3, 4, 5, 6];
  let arr2 = [<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>, <p>6</p>];
  return (
    <>
      <div style={styleObj}>Heading</div>
      <div>value of a is : {a}</div>
      <div>value of b is : {b}</div>
      <div>
        sum of {a} and {b} is : {a * b}
      </div>
      <p>objects are not valid : {obj.name}</p>
      <p>But arrays are : {arr}</p>
      <p>But arrays are : {arr2}</p>
    </>
  );
}
