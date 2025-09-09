import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import effect images
import magicalFairy from '../assets/effects/mystical-fairy.png';
import magicalButterfly from '../assets/effects/magical-butterfly.png';
import purpleEnergySwirl from '../assets/effects/purple-energy-swirl.png';
import goldenMagicFeather from '../assets/effects/golden-magic-feather.png';

interface InteractiveEffectConfig {
  type: 'fairy' | 'butterfly' | 'energy' | 'feather';
  duration: number;
  scale: number;
  spread: number;
}

interface HoverEffectsProps {
  children: React.ReactNode;
  effectType?: 'fairy' | 'butterfly' | 'energy' | 'feather' | 'mixed';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const HoverEffects: React.FC<HoverEffectsProps> = ({ 
  children, 
  effectType = 'mixed', 
  intensity = 'medium',
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const effectImages = {
    fairy: magicalFairy,
    butterfly: magicalButterfly,
    energy: purpleEnergySwirl,
    feather: goldenMagicFeather
  };

  const getEffectConfig = (): InteractiveEffectConfig[] => {
    const baseIntensity = intensity === 'low' ? 1 : intensity === 'high' ? 3 : 2;
    
    if (effectType === 'mixed') {
      return [
        { type: 'fairy', duration: 2, scale: 0.8, spread: 100 },
        { type: 'butterfly', duration: 2.5, scale: 0.6, spread: 120 },
        { type: 'energy', duration: 1.8, scale: 0.5, spread: 80 }
      ].map(config => ({
        ...config,
        scale: config.scale * (baseIntensity * 0.5),
        spread: config.spread * baseIntensity
      }));
    }
    
    return [{
      type: effectType as 'fairy' | 'butterfly' | 'energy' | 'feather',
      duration: 2,
      scale: 0.7 * baseIntensity,
      spread: 100 * baseIntensity
    }];
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const effects = getEffectConfig();

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      <AnimatePresence>
        {isHovered && effects.map((effect, index) => (
          <motion.div
            key={`${effect.type}-${index}`}
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              zIndex: 1000 + index
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, effect.scale, 0],
              x: [0, (Math.random() - 0.5) * effect.spread],
              y: [0, (Math.random() - 0.5) * effect.spread],
              rotate: [0, Math.random() * 360]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: effect.duration,
              ease: "easeOut",
              delay: index * 0.1
            }}
          >
            <img
              src={effectImages[effect.type]}
              alt={`${effect.type} effect`}
              className="w-8 h-8 select-none"
              style={{
                filter: `drop-shadow(0 0 8px ${
                  effect.type === 'fairy' ? 'rgba(147, 51, 234, 0.6)' :
                  effect.type === 'butterfly' ? 'rgba(255, 215, 0, 0.6)' :
                  effect.type === 'energy' ? 'rgba(147, 51, 234, 0.8)' :
                  'rgba(255, 215, 0, 0.8)'
                })`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Ambient glow effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
              zIndex: -1
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverEffects;
