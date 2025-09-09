import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Sparkles } from 'lucide-react';

// Import slides content
import angelHealingVideo from '../assets/videos/angel-healing.mp4';
import tarotAltarImg from '../assets/images/backgrounds/tarot-altar.webp';
import horoscopeVideo from '../assets/videos/horoscope.mp4';

const slides = [
  {
    type: 'video',
    src: angelHealingVideo,
    title: 'Experience Angelic Healing',
    subtitle: 'Connect with divine energies for deep spiritual and emotional healing.',
    cta: 'Book a Healing Session',
    link: '/consultation'
  },
  {
    type: 'image',
    src: tarotAltarImg,
    title: 'Unveil Your Destiny',
    subtitle: 'Gain clarity and guidance with our expert Tarot Card readings.',
    cta: 'Get a Reading',
    link: '/consultation'
  },
  {
    type: 'video',
    src: horoscopeVideo,
    title: 'Explore Your Cosmic Blueprint',
    subtitle: 'Personalized astrological predictions to navigate your life path with confidence.',
    cta: 'Discover Your Chart',
    link: '/consultation'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          {slides[currentSlide].type === 'video' ? (
            <video
              src={slides[currentSlide].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' } }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.6, ease: 'easeIn' } }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center space-x-4">
                <Sparkles className="w-8 h-8 text-gold-400 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold font-cinzel bg-gradient-to-r from-luxury-200 via-gold-300 to-luxury-200 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h1>
                <Sparkles className="w-8 h-8 text-gold-400 animate-pulse" />
              </div>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-inter leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              <a
                href={slides[currentSlide].link}
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter text-lg cta-button interactive transform hover:scale-105"
              >
                <Star className="w-5 h-5" />
                <span>{slides[currentSlide].cta}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
