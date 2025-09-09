import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Star, Sparkles, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  price: string;
  videoLoop?: string;
  category: 'mystical' | 'healing' | 'divination' | 'guidance';
}

interface PremiumServiceCardProps {
  service: Service;
  index: number;
  onBookNow: (service: Service) => void;
}

const PremiumServiceCard: React.FC<PremiumServiceCardProps> = ({ 
  service, 
  index,
  onBookNow 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Category-based styling
  const getCategoryStyle = (category: Service['category']) => {
    switch (category) {
      case 'mystical':
        return {
          gradient: 'from-luxury-900 via-mystic-800 to-divine-900',
          glow: 'shadow-mystic hover:shadow-divine',
          accent: 'text-luxury-300',
          border: 'border-luxury-500/30'
        };
      case 'healing':
        return {
          gradient: 'from-emerald-900 via-teal-800 to-cyan-900',
          glow: 'shadow-emerald-500/30 hover:shadow-cyan-500/50',
          accent: 'text-emerald-300',
          border: 'border-emerald-500/30'
        };
      case 'divination':
        return {
          gradient: 'from-purple-900 via-violet-800 to-indigo-900',
          glow: 'shadow-purple-500/30 hover:shadow-violet-500/50',
          accent: 'text-purple-300',
          border: 'border-purple-500/30'
        };
      case 'guidance':
        return {
          gradient: 'from-gold-900 via-amber-800 to-yellow-900',
          glow: 'shadow-gold hover:shadow-amber-500/50',
          accent: 'text-gold-300',
          border: 'border-gold-500/30'
        };
      default:
        return {
          gradient: 'from-luxury-900 via-mystic-800 to-divine-900',
          glow: 'shadow-mystic hover:shadow-divine',
          accent: 'text-luxury-300',
          border: 'border-luxury-500/30'
        };
    }
  };

  const categoryStyle = getCategoryStyle(service.category);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const glow = glowRef.current;
    const cta = ctaRef.current;

    if (!card || !image || !glow || !cta) return;

    // Initial animation
    gsap.fromTo(card, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95,
        rotationX: 15 
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      }
    );

    // Hover animations
    const handleMouseEnter = () => {
      setIsHovered(true);
      
      const tl = gsap.timeline();
      
      // Card elevation and glow
      tl.to(card, {
        y: -15,
        scale: 1.02,
        rotationY: 5,
        duration: 0.4,
        ease: "power2.out",
      })
      // Image zoom and rotate
      .to(image, {
        scale: 1.15,
        rotation: 2,
        duration: 0.6,
        ease: "power2.out",
      }, 0)
      // Glow effect
      .to(glow, {
        opacity: 0.8,
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      }, 0)
      // CTA slide up
      .fromTo(cta, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.3,
          ease: "back.out(1.7)" 
        }, 0.2
      );
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      
      const tl = gsap.timeline();
      
      tl.to(card, {
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(image, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, 0)
      .to(glow, {
        opacity: 0.3,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
      }, 0)
      .to(cta, { 
        y: 10, 
        opacity: 0.8,
        duration: 0.2,
        ease: "power2.inOut" 
      }, 0);
    };

    // CTA click animation
    const handleCtaClick = () => {
      gsap.to(card, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        onComplete: () => onBookNow(service)
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    cta.addEventListener('click', handleCtaClick);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      cta.removeEventListener('click', handleCtaClick);
    };
  }, [index, service, onBookNow]);

  return (
    <div 
      ref={cardRef}
      className={`
        relative group cursor-pointer overflow-hidden rounded-2xl
        bg-gradient-to-br ${categoryStyle.gradient}
        border ${categoryStyle.border}
        ${categoryStyle.glow}
        transition-all duration-500
        backdrop-blur-md
        animate-on-scroll
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Premium glow effect */}
      <div 
        ref={glowRef}
        className={`absolute inset-0 rounded-2xl opacity-30 transition-all duration-500 ${categoryStyle.glow}`}
        style={{
          background: `radial-gradient(circle at center, ${service.category === 'mystical' ? '#9c6cff' : service.category === 'healing' ? '#10b981' : service.category === 'divination' ? '#8b5cf6' : '#ffd320'} 0%, transparent 70%)`
        }}
      />

      {/* Image container with luxury frame */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        {/* Video loop background if provided */}
        {service.videoLoop && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src={service.videoLoop} type="video/mp4" />
          </video>
        )}
        
        <img
          ref={imageRef}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-700"
          style={{ filter: 'contrast(1.1) saturate(1.2)' }}
        />
        
        {/* Luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Floating mystical elements */}
        <div className="absolute top-4 right-4">
          <Sparkles 
            className={`w-6 h-6 ${categoryStyle.accent} opacity-70 animate-pulse`}
            style={{ filter: 'drop-shadow(0 0 5px currentColor)' }}
          />
        </div>
        
        {/* Price badge */}
        <div className="absolute top-4 left-4">
          <div className={`
            px-4 py-2 rounded-full text-sm font-bold
            bg-gradient-to-r from-gold-500 to-gold-600
            text-black shadow-gold
            transform rotate-[-3deg]
            font-cinzel
          `}>
            {service.price}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 relative z-10">
        {/* Title with luxury typography */}
        <h3 className={`
          text-xl font-bold mb-3 font-cinzel
          ${categoryStyle.accent}
          transition-all duration-300
        `}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-6 font-inter">
          {service.description}
        </p>

        {/* Premium CTA Button */}
        <button
          ref={ctaRef}
          className={`
            w-full group/btn relative overflow-hidden
            bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500
            hover:from-gold-400 hover:via-gold-500 hover:to-gold-400
            text-black font-bold py-4 px-6 rounded-xl
            transition-all duration-300
            shadow-gold hover:shadow-gold
            font-inter text-sm
            cta-button
            interactive
            transform hover:scale-[1.02]
          `}
          style={{ opacity: 0.8 }}
        >
          {/* Button shimmer effect */}
          <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center justify-center space-x-2">
            <Star className="w-4 h-4" />
            <span>Book Divine Session</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </div>
        </button>

        {/* Mystical accent line */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-1
          bg-gradient-to-r ${categoryStyle.gradient}
          transform scale-x-0 group-hover:scale-x-100
          transition-transform duration-500 origin-left
        `} />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`
          absolute top-2 right-2 w-8 h-8 rounded-full
          ${categoryStyle.glow} opacity-50
          animate-pulse
        `} />
      </div>
    </div>
  );
};

export default PremiumServiceCard;