import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import effect images
import magicalFairy from '../assets/effects/mystical-fairy.png';
import purpleEnergySwirl from '../assets/effects/purple-energy-swirl.png';
import goldenMagicFeather from '../assets/effects/golden-magic-feather.png';
import mysticalLightBeam from '../assets/effects/mystical-light-beam.png';

interface ScrollBasedEffectsProps {
  className?: string;
  reducedMotion?: boolean; // Option to reduce animations for performance
}

const ScrollBasedEffects: React.FC<ScrollBasedEffectsProps> = ({ 
  className = '', 
  reducedMotion = false 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track multiple sections for different effects with optimized settings
  const [section2Ref, section2InView] = useInView({ 
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '-10% 0px -10% 0px' // Only trigger when more in view
  });

  // Optimized dimension updates with debouncing
  const updateDimensions = useCallback(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    updateDimensions();
    
    let timeoutId: number;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 150); // Debounce resize events
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [updateDimensions]);

  // Generate random starting positions and timing offsets (consistent per page load)
  const randomOffsets = useMemo(() => ({
    fairyStartX: Math.random() * 200 - 100, // -100 to 100
    fairyStartY: Math.random() * 150 + 100, // 100 to 250
    featherStartX: Math.random() * 300 + 50, // 50 to 350
    featherStartY: Math.random() * 100 + 50, // 50 to 150
    crystalStartOffset: Math.random() * 200 - 100, // -100 to 100
    energyStartOffset: Math.random() * 150 - 75, // -75 to 75
    scrollOffset: Math.random() * 300 + 100, // 100 to 400 scroll offset
    timingVariation: Math.random() * 0.5 + 0.8, // 0.8 to 1.3 timing multiplier
  }), []);

  // Use useSpring for smoother animations that handle fast scrolling better
  const scrollYSmooth = useSpring(scrollY, { 
    stiffness: 100, 
    damping: 30, 
    mass: 0.5,
    restSpeed: 0.01, // Prevent unnecessary updates
    restDelta: 0.01
  });

  // Optimized scroll-based transforms with reduced complexity for performance
  const fairyX = useTransform(
    scrollYSmooth, 
    [0, 2000 + randomOffsets.scrollOffset, 4000 + randomOffsets.scrollOffset], 
    [randomOffsets.fairyStartX, windowWidth * 0.8, windowWidth * 0.2]
  );
  const fairyY = useTransform(
    scrollYSmooth, 
    [0, 1000 + randomOffsets.scrollOffset, 2000, 3000, 4000], 
    [randomOffsets.fairyStartY, 150, 300, 100, 400]
  );
  const fairyRotate = useTransform(scrollYSmooth, [0, 2000 * randomOffsets.timingVariation], [0, 360]);

  const crystalX = useTransform(
    scrollYSmooth, 
    [500 + randomOffsets.scrollOffset, 2500, 4500], 
    [windowWidth + randomOffsets.crystalStartOffset, windowWidth * 0.2, -100]
  );
  const crystalY = useTransform(
    scrollYSmooth, 
    [500, 1500, 2500, 3500], 
    [300 + randomOffsets.crystalStartOffset * 0.3, 200, 450, 250]
  );

  const energyX = useTransform(
    scrollYSmooth, 
    [800 + randomOffsets.scrollOffset, 3000], 
    [-200 + randomOffsets.energyStartOffset, windowWidth + 200]
  );
  const energyY = useTransform(scrollYSmooth, [800, 2000, 3000], [400, 200, 500]);
  const energyRotate = useTransform(scrollYSmooth, [800, 3000 * randomOffsets.timingVariation], [0, 720]);

  const portalScale = useTransform(scrollYSmooth, [1200 + randomOffsets.scrollOffset, 2000, 3000], [0.5, 1.2, 0.8]);
  const portalOpacity = useTransform(scrollYSmooth, [1200, 1800, 2500], [0, 1, 0.3]);

  const featherX = useTransform(
    scrollYSmooth, 
    [0, 4000 * randomOffsets.timingVariation], 
    [windowWidth + randomOffsets.featherStartX, -200]
  );
  const featherY = useTransform(
    scrollYSmooth, 
    [0, 1000, 2000, 3000, 4000], 
    [randomOffsets.featherStartY, 50, 150, 80, 200]
  );

  const lightBeamScale = useTransform(scrollYSmooth, [1500, 2500, 3500], [0.2, 1.5, 0.6]);
  const lightBeamOpacity = useTransform(scrollYSmooth, [1500, 2000, 3000], [0, 0.8, 0.2]);
  
  const magicalParticleX = useTransform(scrollYSmooth, [0, 3000], [windowWidth + 100, -200]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`} 
      ref={containerRef}
      style={{
        transform: 'translateZ(0)', // Force GPU layer
        backfaceVisibility: 'hidden', // Optimize rendering
      }}
    >
      {/* Primary Fairy - Hero Journey */}
      <motion.div
        className="absolute"
        style={{
          x: fairyX,
          y: fairyY,
          rotate: fairyRotate,
          zIndex: 20,
          willChange: 'transform', // GPU optimization
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 3 * randomOffsets.timingVariation,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween" // More performance-friendly
          }
        }}
      >
        <motion.img
          src={magicalFairy}
          alt="Magical Fairy"
          className="w-32 h-32 md:w-40 md:h-40 select-none"
          style={{
            filter: 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.8))',
            willChange: 'transform', // GPU optimization
          }}
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            rotate: {
              duration: 4 * randomOffsets.timingVariation,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween" // More performance-friendly
            }
          }}
        />
      </motion.div>

      {/* Crystal Portal - Cross Movement */}
      <motion.div
        className="absolute"
        style={{
          x: crystalX,
          y: crystalY,
          zIndex: 18
        }}
      >
        <motion.img
          src={purpleEnergySwirl}
          alt="Purple Energy Swirl"
          className="w-24 h-24 md:w-32 md:h-32 select-none"
          style={{
            filter: 'drop-shadow(0 0 18px rgba(147, 51, 234, 0.7))',
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360]
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      </motion.div>

      {/* Energy Swirl - Rotating Movement */}
      <motion.div
        className="absolute"
        style={{
          x: energyX,
          y: energyY,
          rotate: energyRotate,
          zIndex: 15
        }}
      >
        <motion.img
          src={purpleEnergySwirl}
          alt="Purple Energy Swirl"
          className="w-32 h-32 md:w-40 md:h-40 select-none"
          style={{
            filter: 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.7))',
            opacity: 0.8
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>

      {/* Crystal Portal - Scale and Fade */}
      <motion.div
        className="absolute top-1/2 left-1/2"
        style={{
          x: '-50%',
          y: '-50%',
          scale: portalScale,
          opacity: portalOpacity,
          zIndex: 10
        }}
      >
                <motion.img
          src={mysticalLightBeam}
          alt="Mystical Light Beam"
          className="w-16 h-16 md:w-24 md:h-24 select-none opacity-80"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.8))',
            x: magicalParticleX
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>

      {/* Golden Feather - Floating */}
      <motion.div
        className="absolute"
        style={{
          x: featherX,
          y: featherY,
          zIndex: 22
        }}
      >
        <motion.img
          src={goldenMagicFeather}
          alt="Golden Magic Feather"
          className="w-16 h-16 md:w-20 md:h-20 select-none"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.8))',
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -8, 0],
          }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>

      {/* Light Beam - Pulsing */}
      <motion.div
        className="absolute bottom-20 right-20"
        style={{
          scale: lightBeamScale,
          opacity: lightBeamOpacity,
          zIndex: 12
        }}
      >
        <motion.img
          src={mysticalLightBeam}
          alt="Mystical Light Beam"
          className="w-36 h-36 md:w-48 md:h-48 select-none"
          style={{
            filter: 'drop-shadow(0 0 35px rgba(255, 255, 255, 0.6))',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>



      {section2InView && (
        <motion.div
          className="absolute"
          style={{
            top: `${40 + randomOffsets.featherStartY * 0.3}%`,
            right: `${20 + randomOffsets.featherStartX * 0.1}%`
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <motion.img
            src={goldenMagicFeather}
            alt="Section Magic Feather"
            className="w-20 h-20 select-none"
            animate={{
              x: [0, 30, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              x: { duration: 4, repeat: Infinity },
              rotate: { duration: 3, repeat: Infinity }
            }}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))',
            }}
          />
        </motion.div>
      )}

      {section2InView && (
        <motion.div
          className="absolute"
          style={{
            top: `${60 + randomOffsets.fairyStartY * 0.2}%`,
            left: `${16 + randomOffsets.fairyStartX * 0.1}%`
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.5, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <motion.img
            src={magicalFairy}
            alt="Section Magical Fairy"
            className="w-24 h-24 select-none"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              y: { duration: 3.5, repeat: Infinity },
              rotate: { duration: 4, repeat: Infinity }
            }}
            style={{
              filter: 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.6))',
            }}
          />
        </motion.div>
      )}

      {/* Hidden div elements to track scroll sections */}
      <div ref={section2Ref} className="absolute top-full w-full h-screen" />

      {/* Ambient Particles - Reduced for performance */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity', // Optimize for GPU
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
              type: "tween" // More performance-friendly than spring
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollBasedEffects;
