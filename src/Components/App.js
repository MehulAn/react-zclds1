import React from 'react';
import './style.css';
// import { SampleComponent } from './SampleComponent';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

export default function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Contact />
    </div>
  );
}
