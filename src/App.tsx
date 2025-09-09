import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Guidance from './pages/Guidance';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Home from './pages/Home';
import PremiumHome from './pages/PremiumHome';
import Courses from './pages/Courses';
import CursorEffects from './components/CursorEffects';
import LoadingScreen from './components/LoadingScreen';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import { initializePerformanceOptimizations } from './utils/performanceOptimizer';
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Initialize performance optimizations for 60fps animations
    initializePerformanceOptimizations();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <SmoothScrollProvider>
          <Router>
            <CursorEffects />
            <Routes>
              {/* Use PremiumHome for the main route to showcase transformation */}
              <Route path="/" element={<PremiumHome />} />
              <Route path="/home-original" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/guidance" element={<Guidance />} />
              <Route path="/Consultation" element={<Consultation />} />
              <Route path="/Courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Shop" element={<Shop />} />
            </Routes>
          </Router>
        </SmoothScrollProvider>
      )}
    </>
  );
};

export default App;