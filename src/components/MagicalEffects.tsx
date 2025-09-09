import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import effect images
import magicalFairy from '../assets/effects/mystical-fairy.png';
import purpleEnergySwirl from '../assets/effects/purple-energy-swirl.png';
import goldenMagicFeather from '../assets/effects/golden-magic-feather.png';
import mysticalLightBeam from '../assets/effects/mystical-light-beam.png';

interface EffectConfig {
  id: string;
  image: string;
  size: { width: number; height: number };
  duration: number;
  delay: number;
  path: string;
  zIndex: number;
  opacity: number;
  rotate: boolean;
  pulse: boolean;
}

interface MagicalEffectsProps {
  page: 'home' | 'about' | 'services' | 'shop' | 'consultation' | 'courses' | 'contact' | 'guidance';
  intensity?: 'low' | 'medium' | 'high';
  enableScrollTrigger?: boolean;
}

const MagicalEffects: React.FC<MagicalEffectsProps> = ({ 
  page, 
  intensity = 'medium',
  enableScrollTrigger = true 
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    if (enableScrollTrigger) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [enableScrollTrigger]);

  const effectConfigs = useMemo(() => {
    const baseConfigs: Record<string, EffectConfig[]> = {
      home: [
        {
          id: 'fairy-1',
          image: magicalFairy,
          size: { width: 160, height: 160 },
          duration: 20,
          delay: 0,
          path: 'M-100,300 Q200,100 500,200 T900,150 Q1200,100 1500,250',
          zIndex: 10,
          opacity: 0.9,
          rotate: true,
          pulse: true
        },
        {
          id: 'fairy-2',
          image: magicalFairy,
          size: { width: 120, height: 120 },
          duration: 25,
          delay: 5,
          path: 'M1500,400 Q1200,200 800,350 T400,300 Q100,250 -100,400',
          zIndex: 8,
          opacity: 0.7,
          rotate: true,
          pulse: false
        },
        {
          id: 'fairy-3',
          image: magicalFairy,
          size: { width: 140, height: 140 },
          duration: 18,
          delay: 2,
          path: 'M-50,500 Q300,350 600,450 T1000,400 Q1300,350 1600,500',
          zIndex: 9,
          opacity: 0.8,
          rotate: true,
          pulse: true
        },
        {
          id: 'energy-swirl-1',
          image: purpleEnergySwirl,
          size: { width: 150, height: 150 },
          duration: 15,
          delay: 3,
          path: 'M1400,200 Q1100,400 800,300 T200,450 Q-100,500 -200,600',
          zIndex: 5,
          opacity: 0.5,
          rotate: true,
          pulse: false
        },
        {
          id: 'energy-swirl-2',
          image: purpleEnergySwirl,
          size: { width: 180, height: 180 },
          duration: 30,
          delay: 8,
          path: 'M1600,600 Q1200,500 800,600 T0,550',
          zIndex: 3,
          opacity: 0.5,
          rotate: true,
          pulse: true
        },
        {
          id: 'feather-1',
          image: goldenMagicFeather,
          size: { width: 80, height: 80 },
          duration: 22,
          delay: 6,
          path: 'M-100,100 Q400,50 800,150 T1600,100',
          zIndex: 12,
          opacity: 0.9,
          rotate: true,
          pulse: false
        },
        {
          id: 'light-beam-1',
          image: mysticalLightBeam,
          size: { width: 180, height: 180 },
          duration: 12,
          delay: 10,
          path: 'M800,700 Q600,500 400,600 T-100,550',
          zIndex: 6,
          opacity: 0.3,
          rotate: false,
          pulse: true
        }
      ],
      about: [
        {
          id: 'fairy-about',
          image: magicalFairy,
          size: { width: 130, height: 130 },
          duration: 18,
          delay: 1,
          path: 'M-50,200 Q400,150 800,200 T1500,180',
          zIndex: 10,
          opacity: 0.8,
          rotate: true,
          pulse: true
        },
        {
          id: 'energy-about',
          image: purpleEnergySwirl,
          size: { width: 140, height: 140 },
          duration: 20,
          delay: 4,
          path: 'M1500,300 Q1000,400 500,350 T-100,400',
          zIndex: 7,
          opacity: 0.5,
          rotate: true,
          pulse: false
        },
        {
          id: 'feather-about',
          image: goldenMagicFeather,
          size: { width: 90, height: 90 },
          duration: 16,
          delay: 7,
          path: 'M1600,500 Q1200,350 600,450 T-50,400',
          zIndex: 9,
          opacity: 0.9,
          rotate: true,
          pulse: true
        }
      ],
      services: [
        {
          id: 'fairy-services',
          image: magicalFairy,
          size: { width: 160, height: 160 },
          duration: 25,
          delay: 0,
          path: 'M-100,250 Q300,200 700,300 T1400,250',
          zIndex: 8,
          opacity: 0.8,
          rotate: true,
          pulse: true
        },
        {
          id: 'light-beam-services',
          image: mysticalLightBeam,
          size: { width: 140, height: 140 },
          duration: 18,
          delay: 5,
          path: 'M1500,400 Q1100,300 700,450 T100,400',
          zIndex: 6,
          opacity: 0.4,
          rotate: false,
          pulse: true
        },
        {
          id: 'energy-services',
          image: purpleEnergySwirl,
          size: { width: 85, height: 85 },
          duration: 22,
          delay: 3,
          path: 'M1600,150 Q1200,250 800,200 T200,300',
          zIndex: 10,
          opacity: 0.8,
          rotate: true,
          pulse: false
        }
      ],
      shop: [
        {
          id: 'fairy-shop',
          image: magicalFairy,
          size: { width: 140, height: 140 },
          duration: 20,
          delay: 2,
          path: 'M-80,350 Q350,250 750,350 T1450,300',
          zIndex: 9,
          opacity: 0.8,
          rotate: true,
          pulse: true
        },
        {
          id: 'light-beam-shop',
          image: mysticalLightBeam,
          size: { width: 130, height: 130 },
          duration: 28,
          delay: 6,
          path: 'M1550,200 Q1150,350 650,250 T50,400',
          zIndex: 7,
          opacity: 0.6,
          rotate: false,
          pulse: true
        }
      ],
      consultation: [
        {
          id: 'energy-consultation',
          image: purpleEnergySwirl,
          size: { width: 110, height: 110 },
          duration: 16,
          delay: 1,
          path: 'M-60,300 Q300,200 650,350 T1350,280',
          zIndex: 8,
          opacity: 0.6,
          rotate: true,
          pulse: false
        },
        {
          id: 'light-consultation',
          image: mysticalLightBeam,
          size: { width: 150, height: 150 },
          duration: 24,
          delay: 4,
          path: 'M1400,450 Q1000,350 600,500 T150,400',
          zIndex: 6,
          opacity: 0.4,
          rotate: false,
          pulse: true
        }
      ],
      courses: [
        {
          id: 'feather-courses',
          image: goldenMagicFeather,
          size: { width: 110, height: 110 },
          duration: 19,
          delay: 0,
          path: 'M-70,250 Q250,180 550,280 T1250,220',
          zIndex: 10,
          opacity: 0.9,
          rotate: true,
          pulse: true
        },
        {
          id: 'light-beam-courses',
          image: mysticalLightBeam,
          size: { width: 95, height: 95 },
          duration: 21,
          delay: 3,
          path: 'M1450,350 Q1050,250 650,400 T250,320',
          zIndex: 9,
          opacity: 0.7,
          rotate: false,
          pulse: true
        }
      ],
      contact: [
        {
          id: 'fairy-contact',
          image: magicalFairy,
          size: { width: 120, height: 120 },
          duration: 17,
          delay: 2,
          path: 'M-90,400 Q400,300 800,450 T1500,380',
          zIndex: 9,
          opacity: 0.6,
          rotate: true,
          pulse: true
        }
      ],
      guidance: [
        {
          id: 'fairy-guidance-1',
          image: magicalFairy,
          size: { width: 140, height: 140 },
          duration: 22,
          delay: 1,
          path: 'M-100,250 Q300,150 600,300 T1200,200 Q1500,150 1800,350',
          zIndex: 10,
          opacity: 0.8,
          rotate: true,
          pulse: true
        },
        {
          id: 'feather-guidance',
          image: goldenMagicFeather,
          size: { width: 80, height: 80 },
          duration: 18,
          delay: 3,
          path: 'M1600,400 Q1200,250 800,380 T200,320 Q-100,280 -300,450',
          zIndex: 8,
          opacity: 0.7,
          rotate: false,
          pulse: true
        },
        {
          id: 'light-guidance',
          image: mysticalLightBeam,
          size: { width: 100, height: 100 },
          duration: 25,
          delay: 6,
          path: 'M1800,150 Q1400,300 1000,180 T500,250 Q200,200 -200,350',
          zIndex: 7,
          opacity: 0.6,
          rotate: true,
          pulse: false
        }
      ]
    };

    const configs = baseConfigs[page] || [];
    
    // Adjust based on intensity
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'high' ? 1.5 : 1;
    
    return configs.map(config => ({
      ...config,
      opacity: config.opacity * intensityMultiplier,
      duration: config.duration / intensityMultiplier
    }));
  }, [page, intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {effectConfigs.map((effect) => (
          <motion.div
            key={effect.id}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: effect.opacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: effect.delay }}
            style={{ zIndex: effect.zIndex }}
          >
            <motion.img
              src={effect.image}
              alt={effect.id}
              width={effect.size.width}
              height={effect.size.height}
              className="select-none"
              animate={{
                rotate: effect.rotate ? [0, 360] : 0,
                scale: effect.pulse ? [1, 1.2, 1] : 1,
              }}
              transition={{
                rotate: effect.rotate ? {
                  duration: effect.duration,
                  repeat: Infinity,
                  ease: "linear"
                } : {},
                scale: effect.pulse ? {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {},
              }}
              style={{
                offsetPath: `path("${effect.path}")`,
                offsetDistance: enableScrollTrigger ? 
                  `${((scrollY / 10) % 100)}%` : 
                  undefined,
                filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))',
              }}
            />
            
            {/* SVG Path Animation for non-scroll based movement */}
            {!enableScrollTrigger && (
              <motion.div
                className="absolute"
                animate={{
                  offsetDistance: ["0%", "100%"]
                }}
                transition={{
                  duration: effect.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: effect.delay
                }}
                style={{
                  offsetPath: `path("${effect.path}")`,
                }}
              >
                <motion.img
                  src={effect.image}
                  alt={effect.id}
                  width={effect.size.width}
                  height={effect.size.height}
                  className="select-none"
                  animate={{
                    rotate: effect.rotate ? [0, 360] : 0,
                    scale: effect.pulse ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    rotate: effect.rotate ? {
                      duration: effect.duration / 3,
                      repeat: Infinity,
                      ease: "linear"
                    } : {},
                    scale: effect.pulse ? {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {},
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))',
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              filter: 'blur(0.5px)',
              zIndex: 1
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MagicalEffects;
