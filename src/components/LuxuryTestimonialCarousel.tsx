import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  avatar?: string;
}

const LuxuryTestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Her tarot reading opened my eyes. It was accurate, empathetic, and truly magical. I found clarity in areas where I was confused for months.",
      name: "Meera S.",
      location: "Pune",
      rating: 5,
      service: "Tarot Reading",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e0ede1?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      text: "The crystal healing session helped me overcome months of anxiety. Thank you, Pranjal ji. The energy shift was immediate and profound.",
      name: "Tanya A.",
      location: "Dubai",
      rating: 5,
      service: "Crystal Healing",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      text: "Her angel reading was like talking to a divine friend. Highly recommend! The messages I received were exactly what my soul needed to hear.",
      name: "Reema M.",
      location: "Mumbai",
      rating: 5,
      service: "Angel Reading",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      text: "Dr. Sharma's numerology reading was incredibly insightful. She helped me understand my life purpose and make important career decisions with confidence.",
      name: "Rajesh K.",
      location: "Bangalore",
      rating: 5,
      service: "Numerology",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      text: "The Vastu consultation transformed our home's energy completely. Our family feels more harmonious and prosperous since implementing her suggestions.",
      name: "Priya & Amit",
      location: "Delhi",
      rating: 5,
      service: "Vastu Consultation",
      avatar: "https://images.unsplash.com/photo-1521252659862-eec69941b071?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, testimonials.length]);

  // Smooth transition animations
  useEffect(() => {
    testimonialRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === currentIndex) {
          // Active testimonial animation
          gsap.fromTo(ref, 
            { 
              opacity: 0, 
              scale: 0.9,
              y: 50,
              rotationY: -15 
            },
            { 
              opacity: 1, 
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.1
            }
          );
        } else {
          // Inactive testimonials
          gsap.to(ref, { 
            opacity: 0, 
            scale: 0.8,
            y: 20,
            duration: 0.4,
            ease: "power2.inOut"
          });
        }
      }
    });
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-gold-400 fill-gold-400' : 'text-gray-400'
        } transition-all duration-300`}
        style={{ 
          filter: i < rating ? 'drop-shadow(0 0 3px #ffd320)' : 'none' 
        }}
      />
    ));
  };

  return (
    <section className="py-20 section-morph animate-on-scroll" data-bg-type="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-luxury-400 mr-2 animate-pulse" />
            <h2 className="text-4xl font-bold font-cinzel text-luxury-300">
              Divine Testimonials
            </h2>
            <Sparkles className="w-6 h-6 text-luxury-400 ml-2 animate-pulse" />
          </div>
          <p className="text-white/80 text-lg font-inter max-w-2xl mx-auto">
            Hear from souls who have found clarity, healing, and transformation through our sacred services
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-luxury-900/40 to-divine-900/40 backdrop-blur-md border border-luxury-500/30"
          style={{ minHeight: '400px' }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Premium glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-500/10 via-transparent to-divine-500/10 pointer-events-none" />
          
          {/* Floating elements background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="absolute opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  fontSize: `${Math.random() * 8 + 12}px`
                }}
              >
                ✨
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="relative z-10 p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => (testimonialRefs.current[index] = el)}
                className={`absolute inset-12 flex flex-col items-center text-center ${
                  index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                style={{ opacity: 0 }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-gold-400 opacity-60" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl leading-relaxed text-white mb-8 font-playfair italic max-w-4xl">
                  "{testimonial.text}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex items-center mb-6 space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-gold-400/50 shadow-gold"
                    />
                  )}
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-cinzel text-luxury-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 font-inter text-sm">
                      {testimonial.location}
                    </p>
                    <p className="text-gold-400 font-inter text-xs font-medium">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-luxury-800/80 hover:bg-luxury-700 border border-luxury-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 interactive"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-luxury-800/80 hover:bg-luxury-700 border border-luxury-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 interactive"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 interactive ${
                index === currentIndex
                  ? 'bg-gold-400 shadow-gold scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Playback Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/60 hover:text-white transition-colors duration-300 font-inter text-sm interactive"
          >
            {isPlaying ? 'Pause' : 'Play'} Auto-scroll
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonialCarousel;