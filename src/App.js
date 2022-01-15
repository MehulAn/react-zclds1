import React from 'react';
import './style.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}
