import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import effect images
import magicalFairy from '../assets/effects/mystical-fairy.png';
import magicalButterfly from '../assets/effects/magical-butterfly.png';
import purpleEnergySwirl from '../assets/effects/purple-energy-swirl.png';
import magicalCrystalPortal from '../assets/effects/magical-crystal-portal.png';
import goldenMagicFeather from '../assets/effects/golden-magic-feather.png';
import mysticalLightBeam from '../assets/effects/mystical-light-beam.png';

interface ScrollBasedEffectsProps {
  className?: string;
}

const ScrollBasedEffects: React.FC<ScrollBasedEffectsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track multiple sections for different effects
  const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Scroll-based transforms for different effects
  const fairyX = useTransform(scrollY, [0, 2000, 4000], [0, windowWidth * 0.8, windowWidth * 0.2]);
  const fairyY = useTransform(scrollY, [0, 1000, 2000, 3000, 4000], [200, 150, 300, 100, 400]);
  const fairyRotate = useTransform(scrollY, [0, 2000], [0, 360]);

  const butterflyX = useTransform(scrollY, [500, 2500, 4500], [windowWidth, windowWidth * 0.2, -100]);
  const butterflyY = useTransform(scrollY, [500, 1500, 2500, 3500], [300, 200, 450, 250]);

  const energyX = useTransform(scrollY, [800, 3000], [-200, windowWidth + 200]);
  const energyY = useTransform(scrollY, [800, 2000, 3000], [400, 200, 500]);
  const energyRotate = useTransform(scrollY, [800, 3000], [0, 720]);

  const portalScale = useTransform(scrollY, [1200, 2000, 3000], [0.5, 1.2, 0.8]);
  const portalOpacity = useTransform(scrollY, [1200, 1800, 2500], [0, 1, 0.3]);

  const featherX = useTransform(scrollY, [0, 4000], [windowWidth + 100, -200]);
  const featherY = useTransform(scrollY, [0, 1000, 2000, 3000, 4000], [100, 50, 150, 80, 200]);

  const lightBeamScale = useTransform(scrollY, [1500, 2500, 3500], [0.2, 1.5, 0.6]);
  const lightBeamOpacity = useTransform(scrollY, [1500, 2000, 3000], [0, 0.8, 0.2]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`} ref={containerRef}>
      {/* Primary Fairy - Hero Journey */}
      <motion.div
        className="absolute"
        style={{
          x: fairyX,
          y: fairyY,
          rotate: fairyRotate,
          zIndex: 20
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.img
          src={magicalFairy}
          alt="Magical Fairy"
          className="w-24 h-24 md:w-32 md:h-32 select-none"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))',
          }}
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>

      {/* Butterfly - Cross Movement */}
      <motion.div
        className="absolute"
        style={{
          x: butterflyX,
          y: butterflyY,
          zIndex: 18
        }}
      >
        <motion.img
          src={magicalButterfly}
          alt="Magical Butterfly"
          className="w-20 h-20 md:w-28 md:h-28 select-none"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))',
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, -3, 0]
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
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
          src={magicalCrystalPortal}
          alt="Magical Crystal Portal"
          className="w-40 h-40 md:w-56 md:h-56 select-none"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
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

      {/* Section-based Triggered Effects */}
      {section1InView && (
        <motion.div
          className="absolute top-20 left-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <motion.img
            src={magicalFairy}
            alt="Section Fairy"
            className="w-16 h-16 select-none"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 2, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))',
            }}
          />
        </motion.div>
      )}

      {section2InView && (
        <motion.div
          className="absolute top-40 right-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <motion.img
            src={magicalButterfly}
            alt="Section Butterfly"
            className="w-20 h-20 select-none"
            animate={{
              x: [0, 30, 0],
              rotate: [0, 5, -5, 0],
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

      {/* Hidden div elements to track scroll sections */}
      <div ref={section1Ref} className="absolute top-0 w-full h-screen" />
      <div ref={section2Ref} className="absolute top-full w-full h-screen" />
      <div ref={section3Ref} className="absolute" style={{ top: '200vh' }} />
      <div ref={section4Ref} className="absolute" style={{ top: '300vh' }} />

      {/* Ambient Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollBasedEffects;
