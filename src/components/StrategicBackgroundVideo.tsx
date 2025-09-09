import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface StrategicBackgroundVideoProps {
  videoSrc: string;
  overlay?: 'purple' | 'white' | 'gold' | 'none';
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
}

const StrategicBackgroundVideo: React.FC<StrategicBackgroundVideoProps> = ({
  videoSrc,
  overlay = 'purple',
  opacity = 0.3,
  className = '',
  children
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Ensure video plays smoothly
    video.play().catch((error) => {
      console.log('Video autoplay prevented:', error);
    });

    // Smooth entrance animation
    gsap.fromTo(container,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Parallax effect on scroll (if needed)
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        gsap.set(video, {
          transform: `translateY(${rate}px)`,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getOverlayStyle = () => {
    switch (overlay) {
      case 'purple':
        return 'bg-gradient-to-br from-purple-900/60 via-luxury-800/50 to-divine-900/60';
      case 'white':
        return 'bg-gradient-to-br from-white/20 via-white/10 to-white/20';
      case 'gold':
        return 'bg-gradient-to-br from-gold-900/40 via-gold-800/30 to-gold-700/40';
      case 'none':
        return '';
      default:
        return 'bg-gradient-to-br from-purple-900/60 via-luxury-800/50 to-divine-900/60';
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ opacity: 0 }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{
          opacity,
          filter: 'contrast(1.1) saturate(1.2) brightness(0.9)',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Strategic Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${getOverlayStyle()}`} />
      )}

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StrategicBackgroundVideo;