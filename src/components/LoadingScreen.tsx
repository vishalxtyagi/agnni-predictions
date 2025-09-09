import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import loaderVideo from '../assets/videos/loader.mp4';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if video is loaded and ready
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
    };

    const handleVideoEnd = () => {
      if (!isComplete) {
        setIsComplete(true);
        // Premium fade-out animation using GSAP
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            setTimeout(onLoadingComplete, 200);
          }
        });
      }
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('ended', handleVideoEnd);

    // Fallback timeout in case video doesn't load properly
    const fallbackTimeout = setTimeout(() => {
      if (!isComplete) {
        setIsComplete(true);
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onLoadingComplete
        });
      }
    }, 5000);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete, isComplete]);

  // Premium entrance animation
  useEffect(() => {
    if (isVideoReady && containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [isVideoReady]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black overflow-hidden"
      style={{ opacity: 0 }}
    >
      {/* Full-screen Premium Video Loader */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'contrast(1.1) saturate(1.2) brightness(0.95)',
        }}
      >
        <source src={loaderVideo} type="video/mp4" />
      </video>

      {/* Subtle overlay for premium depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      
      {/* Premium glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(139, 69, 194, 0.03) 70%)',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
};

export default LoadingScreen;