import React, { useState } from 'react';
import './Style.css';
import Comp from './Comp';

export default function App() {
  const [flsg, setFlag] = useState(true);

  return (
    <>
      <button onClick={() => setFlag(!flag)}>Switch</button>
      {flag && <comp />}
    </>
  );
}
