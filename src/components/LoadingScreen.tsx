import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logos/agnni-logo-main.webp';
import loaderVideo from '../assets/videos/loader.mp4';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds loading time
    const intervalTime = 50; // Update every 50ms
    const increment = (100 / duration) * intervalTime;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Start fade out after loading complete
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Wait for fade out animation
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 flex items-center justify-center z-[100] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={loaderVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src={logo} 
            alt="Agnni Predictions" 
            className="h-24 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-white font-britannic">
            Agnni Predictions
          </h1>
          <p className="text-purple-300 text-lg font-futura">
            Awakening Divine Wisdom
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-md mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-sm font-futura">
            {Math.round(progress)}% Loading...
          </p>
        </div>

        {/* Mystical Elements */}
        <div className="mt-8 flex justify-center space-x-8">
          {['✨', '🔮', '⭐', '🌙'].map((symbol, index) => (
            <div
              key={index}
              className="text-2xl animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '2s'
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;