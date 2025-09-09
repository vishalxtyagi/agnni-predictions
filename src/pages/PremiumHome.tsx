import React, { useEffect } from 'react';
import { Star, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import LuxuryTestimonialCarousel from '../components/LuxuryTestimonialCarousel';
import InteractiveCrystalGallery from '../components/InteractiveCrystalGallery';

// Import videos
import painToPeaceVideo from '../assets/videos/pain-to-peace.mp4';

// Import hero images
import tarotAltarImg from '../assets/images/backgrounds/tarot-altar.webp';
import amethystCrystalsImg from '../assets/images/backgrounds/amethyst-crystals.webp';

const PremiumHome: React.FC = () => {
  useEffect(() => {
    // Set initial background
    document.body.classList.add('bg-purple-mystical');
    
    return () => {
      document.body.classList.remove('bg-purple-mystical');
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-divine-900">
      <Navbar />

      {/* Premium Hero Carousel */}
      <HeroCarousel />

      {/* About Section with Strategic Background Video */}
      <section className="py-24 bg-gradient-to-b from-divine-900 to-luxury-900 animate-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative animate-on-scroll">
              <img
                src={amethystCrystalsImg}
                alt="Dr. Pranjal D. Sharma"
                className="w-full rounded-3xl shadow-divine border-2 border-luxury-500/30"
                style={{ filter: 'contrast(1.1) saturate(1.2)' }}
              />
              <div className="absolute -top-5 -right-5 w-28 h-28 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-gold-lg">
                <Star className="w-14 h-14 text-black opacity-80" />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-4xl lg:text-5xl font-bold font-cinzel text-luxury-300">
                Why Choose Agnni Predictions?
              </h2>
              <p className="text-white/90 leading-relaxed font-inter text-lg">
                "My mission is to uplift human consciousness through divine practices." – Dr. Pranjal D. Sharma
              </p>
              <p className="text-white/80 leading-relaxed font-inter">
                At Agnni Predictions, every consultation is rooted in authenticity, compassion, and decades of spiritual mastery. With over 30 years of experience, Dr. Sharma has guided thousands towards clarity, peace, and success.
              </p>

              <div className="space-y-4 pt-4">
                <FeatureItem>Divine Guidance with Depth</FeatureItem>
                <FeatureItem>Trusted Experience - 3 decades, 2 PhDs</FeatureItem>
                <FeatureItem>Holistic Solutions - From Tarot to Tantra</FeatureItem>
                <FeatureItem>Mantra-Infused Products</FeatureItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-luxury-900 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-cinzel text-luxury-300 mb-8">
            Our Sacred Services
          </h2>
          <p className="text-white/80 text-lg font-inter mb-12 max-w-3xl mx-auto">
            Experience profound spiritual guidance through our comprehensive range of divine services, each tailored to your unique spiritual journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ServicePreviewCard 
              title="Tarot Reading" 
              description="Decode energies of past, present & future"
              image={tarotAltarImg} 
            />
            <ServicePreviewCard 
              title="Crystal Healing" 
              description="Rebalance chakras & cleanse your aura"
              image={amethystCrystalsImg} 
            />
            <ServicePreviewCard 
              title="Angel Reading" 
              description="Receive divine messages & angelic guidance"
              image={tarotAltarImg} // Placeholder, to be replaced
            />
          </div>

          <a 
            href="/Consultation"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter cta-button interactive transform hover:scale-105 text-lg"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Interactive Crystal Gallery */}
      <div id="crystal-gallery" className="animate-on-scroll">
        <InteractiveCrystalGallery />
      </div>

      {/* Luxury Testimonial Carousel */}
      <div className="animate-on-scroll">
        <LuxuryTestimonialCarousel />
      </div>

      {/* Final CTA Section */}
      <section id="consultation-cta" className="py-24 bg-gradient-to-t from-divine-900 to-luxury-900 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-3xl border border-luxury-500/30 p-12 backdrop-blur-md shadow-divine">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3 animate-pulse" />
              <h2 className="text-4xl lg:text-5xl font-bold font-cinzel text-luxury-300">
                Begin Your Divine Journey
              </h2>
              <Sparkles className="w-8 h-8 text-gold-400 ml-3 animate-pulse" />
            </div>
            
            <p className="text-xl text-white/90 mb-8 font-inter leading-relaxed">
              "A Step towards the future where everything that you never thought possible, is possible."
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter text-lg cta-button interactive transform hover:scale-105"
              >
                <span>Schedule Your Session</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/about"
                className="group inline-flex items-center space-x-3 text-luxury-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-luxury-500/50 hover:border-luxury-400 font-inter text-lg backdrop-blur-md interactive transform hover:scale-105"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureItem = ({ children }) => (
  <div className="flex items-center space-x-4">
    <div className="w-3 h-3 bg-gold-400 rounded-full shadow-sm" />
    <span className="text-white/90 font-inter text-lg">{children}</span>
  </div>
);

const ServicePreviewCard = ({ title, description, image }) => (
  <div 
    className="group bg-gradient-to-br from-luxury-900/50 to-divine-900/50 rounded-3xl border border-luxury-500/30 overflow-hidden backdrop-blur-md hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-on-scroll"
  >
    <div className="relative h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6 text-left">
      <h3 className="text-2xl font-bold font-cinzel text-luxury-300 mb-2">
        {title}
      </h3>
      <p className="text-white/70 font-inter">
        {description}
      </p>
    </div>
  </div>
);

export default PremiumHome;
