import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/about">About</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;
