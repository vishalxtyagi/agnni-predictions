import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Guidance from './pages/Guidance';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CursorEffects from './components/CursorEffects';
import LoadingScreen from './components/LoadingScreen';
import "aos/dist/aos.css";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <CursorEffects />
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
      )}
    </>
  );
};

export default App;