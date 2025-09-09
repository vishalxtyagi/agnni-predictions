import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  createdAt: number;
  size: number;
  color: string;
}

const CursorEffects: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const colors = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create sparkles on mouse movement
      if (Math.random() > 0.6) {
        const newSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          createdAt: Date.now(),
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)]
        };

        setSparkles(prev => [...prev, newSparkle]);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create burst effect on click
      const burstCount = 12;
      const newSparkles: Sparkle[] = [];

      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2;
        const distance = Math.random() * 50 + 20;
        
        newSparkles.push({
          id: Date.now() + Math.random() + i,
          x: e.clientX + Math.cos(angle) * distance,
          y: e.clientY + Math.sin(angle) * distance,
          createdAt: Date.now(),
          size: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      setSparkles(prev => [...prev, ...newSparkles]);
    };

    const animate = () => {
      setSparkles(prev => 
        prev.filter(sparkle => Date.now() - sparkle.createdAt < 1000)
      );
      animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, [colors]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `sparkle-fade 1s ease-out forwards`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes sparkle-fade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default CursorEffects;