import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

// Import magical effect images
import magicalFairy from '../assets/effects/mystical-fairy.png';
import purpleEnergySwirl from '../assets/effects/purple-energy-swirl.png';
import goldenMagicFeather from '../assets/effects/golden-magic-feather.png';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  createdAt: number;
  size: number;
  color: string;
  type: 'trail' | 'burst' | 'hover' | 'magical';
  magicalType?: 'fairy' | 'energy' | 'feather';
}

interface CursorState {
  x: number;
  y: number;
  isOverInteractive: boolean;
  interactiveType: string;
}

const CursorEffects: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isOverInteractive: false,
    interactiveType: ''
  });
  const cursorRef = useRef<HTMLDivElement>(null);

  // Premium color palette - refined and elegant
  const luxuryColors = {
    white: '#ffffff',
    softPurple: '#c699ff',
    gold: '#ffd320',
    mystic: '#e879f9',
    divine: '#9c6cff'
  };

  const colorPalette = [luxuryColors.white, luxuryColors.softPurple, luxuryColors.gold];

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target?.matches('button, a, [role="button"], .interactive, input, textarea') || false;
      const interactiveType = target?.matches('button, [role="button"]') ? 'button' : 
                             target?.matches('a') ? 'link' : 'default';

      setCursorState(prev => ({
        x: e.clientX,
        y: e.clientY,
        isOverInteractive: isInteractive,
        interactiveType
      }));

      // Create refined trailing sparkles - less frequent, more elegant
      if (Math.random() > 0.85) {
        const newSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          createdAt: Date.now(),
          size: Math.random() * 3 + 2, // Smaller, more refined
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          type: 'trail'
        };

        setSparkles(prev => [...prev, newSparkle]);
      }

      // Add magical effects occasionally
      if (Math.random() > 0.95) {
        const magicalTypes: ('fairy' | 'energy' | 'feather')[] = ['fairy', 'energy', 'feather'];
        const randomMagicalType = magicalTypes[Math.floor(Math.random() * magicalTypes.length)];
        
        const magicalSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          createdAt: Date.now(),
          size: Math.random() * 8 + 12, // Larger for magical effects
          color: luxuryColors.mystic,
          type: 'magical',
          magicalType: randomMagicalType
        };

        setSparkles(prev => [...prev, magicalSparkle]);
      }

      // Enhanced sparkles around interactive elements
      if (isInteractive && Math.random() > 0.7) {
        const newSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 25,
          y: e.clientY + (Math.random() - 0.5) * 25,
          createdAt: Date.now(),
          size: Math.random() * 4 + 2,
          color: luxuryColors.gold,
          type: 'hover'
        };

        setSparkles(prev => [...prev, newSparkle]);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isCTA = target?.matches('button, [role="button"], .cta-button') || false;
      
      // Premium burst effect - more elegant and refined
      const burstCount = isCTA ? 16 : 8;
      const newSparkles: Sparkle[] = [];
      const burstRadius = isCTA ? 60 : 40;

      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2;
        const distance = Math.random() * burstRadius + 15;
        const sparkleColor = isCTA ? luxuryColors.gold : 
                            colorPalette[Math.floor(Math.random() * colorPalette.length)];
        
        newSparkles.push({
          id: Date.now() + Math.random() + i,
          x: e.clientX + Math.cos(angle) * distance,
          y: e.clientY + Math.sin(angle) * distance,
          createdAt: Date.now(),
          size: Math.random() * 4 + (isCTA ? 3 : 2),
          color: sparkleColor,
          type: 'burst'
        });
      }

      setSparkles(prev => [...prev, ...newSparkles]);
    };

    const animate = () => {
      setSparkles(prev => 
        prev.filter(sparkle => Date.now() - sparkle.createdAt < 1200)
      );
      animationFrame = requestAnimationFrame(animate);
    };

    // Custom cursor styling
    const updateCursorStyle = () => {
      if (cursorState.isOverInteractive) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    animationFrame = requestAnimationFrame(animate);
    updateCursorStyle();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
      document.body.style.cursor = 'auto';
    };
  }, [cursorState.isOverInteractive]);

  // GSAP animations for sparkles
  useEffect(() => {
    sparkles.forEach(sparkle => {
      const element = document.getElementById(`sparkle-${sparkle.id}`);
      if (element && sparkle.type === 'burst') {
        gsap.fromTo(element,
          { scale: 0, rotation: 0 },
          { 
            scale: 1, 
            rotation: 360,
            duration: 0.6,
            ease: "back.out(1.7)",
            yoyo: true,
            repeat: 1
          }
        );
      }
    });
  }, [sparkles]);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-[90] mix-blend-difference"
        style={{
          left: cursorState.x,
          top: cursorState.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`transition-all duration-200 ease-out ${
            cursorState.isOverInteractive 
              ? 'w-8 h-8 border-2 border-gold-400' 
              : 'w-4 h-4 bg-white'
          } rounded-full`}
          style={{
            boxShadow: cursorState.isOverInteractive 
              ? '0 0 20px rgba(255, 211, 32, 0.6)' 
              : '0 0 10px rgba(255, 255, 255, 0.8)',
          }}
        >
          {cursorState.isOverInteractive && (
            <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-pulse" />
          )}
        </div>
      </div>

      {/* Premium Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-[85]">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            id={`sparkle-${sparkle.id}`}
            className="absolute"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {sparkle.type === 'magical' && sparkle.magicalType ? (
              <div className="relative w-full h-full">
                <img
                  src={
                    sparkle.magicalType === 'fairy' ? magicalFairy :
                    sparkle.magicalType === 'energy' ? purpleEnergySwirl :
                    goldenMagicFeather
                  }
                  alt={`magical ${sparkle.magicalType}`}
                  className="w-full h-full object-contain animate-sparkle-magical"
                  style={{
                    filter: `drop-shadow(0 0 ${sparkle.size}px ${sparkle.color})`,
                  }}
                />
              </div>
            ) : (
              <div
                className="w-full h-full rounded-full animate-sparkle"
                style={{
                  backgroundColor: sparkle.color,
                  boxShadow: `0 0 ${sparkle.size * 3}px ${sparkle.color}`,
                  animation: `sparkle-fade ${sparkle.type === 'burst' ? '1.2s' : '1s'} ease-out forwards`,
                }}
              />
            )}
            {sparkle.type === 'hover' && (
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  backgroundColor: sparkle.color,
                  opacity: 0.4,
                }}
              />
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes sparkle-fade {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2) rotate(90deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) rotate(180deg);
          }
        }
      `}</style>
    </>
  );
};

export default CursorEffects;