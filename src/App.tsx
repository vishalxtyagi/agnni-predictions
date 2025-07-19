import React, { useState } from 'react';
import { Star, Moon, Sun, Gem, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
// import background from './assets/images/night.webp';
import background from './assets/images/purple.webp';
import Hero from './assets/images/hero1.webp';
import Hero2 from './assets/images/hero2.webp';
import Cards from './assets/images/cards.png';
import Service from './components/service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Guidance from './pages/Guidance';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Home from './pages/Home';
import "aos/dist/aos.css";
import Courses from './pages/Courses';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/Consultation" element={<Consultation />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;