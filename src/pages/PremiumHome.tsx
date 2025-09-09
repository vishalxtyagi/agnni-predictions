import React, { useEffect } from 'react';
import { Star, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import LuxuryTestimonialCarousel from '../components/LuxuryTestimonialCarousel';
import InteractiveCrystalGallery from '../components/InteractiveCrystalGallery';
import InteractiveFAQ from '../components/InteractiveFAQ';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import MagicalEffects from '../components/MagicalEffects';
import ScrollBasedEffects from '../components/ScrollBasedEffects';
import { useCart } from '../context/CartContext';

// Import videos
import painToPeaceVideo from '../assets/videos/pain-to-peace.mp4';
import angelHealingVideo from '../assets/videos/angel-healing.mp4';
// Import background images
import tarotAltarImg from '../assets/images/backgrounds/tarot-altar.webp';
import amethystCrystalsImg from '../assets/images/backgrounds/amethyst-crystals.webp';
import astrologyZodiacImg from '../assets/images/backgrounds/astrology-zodiac.webp';
import bokehGlitterImg from '../assets/images/backgrounds/bokeh-glitter.webp';

// Import products data
import { products } from '../data/products';

const PremiumHome: React.FC = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  useEffect(() => {
    // Set initial background
    document.body.classList.add('bg-purple-mystical');
    
    return () => {
      document.body.classList.remove('bg-purple-mystical');
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-divine-900 relative">
      {/* Magical Effects Layer - Background */}
      <MagicalEffects page="home" intensity="medium" enableScrollTrigger={false} />
      
      {/* Scroll-Based Interactive Effects - Foreground */}
      <ScrollBasedEffects className="z-10" />
      
      <Navbar />

      {/* Premium Hero Carousel */}
      <HeroCarousel />

      {/* Why Choose Agnni Predictions - Completely Redesigned */}
      <section 
        className="py-32 relative overflow-hidden animate-on-scroll"
        aria-labelledby="why-choose-agnni"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-15"
              style={{ filter: 'blur(1px)' }}
            >
              <source src={painToPeaceVideo} type="video/mp4" />
            </video>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-divine-900/95 via-luxury-900/90 to-divine-900/95"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-transparent"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold-400/5 to-purple-500/5 rounded-full blur-2xl animate-spin slow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500/20 via-gold-400/20 to-gold-500/20 border border-gold-400/40 rounded-full px-8 py-3 mb-8 backdrop-blur-md">
              <Sparkles className="w-6 h-6 text-gold-400 animate-pulse" />
              <span className="text-gold-400 font-bold text-lg">30 Years of Divine Guidance</span>
              <Sparkles className="w-6 h-6 text-gold-400 animate-pulse delay-500" />
            </div>
            
            <h2 id="why-choose-agnni" className="text-6xl lg:text-7xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-luxury-200 via-gold-300 to-luxury-200 mb-8 leading-tight">
              Why Choose Agnni Predictions?
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-2xl text-white/90 leading-relaxed font-inter mb-4">
                "My mission is to uplift human consciousness through divine practices."
              </p>
              <p className="text-lg text-gold-400 font-semibold">
                – Dr. Pranjal D. Sharma
              </p>
            </div>
          </div>

          {/* Enhanced Stats Section with Animation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <div className="group text-center bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine hover:scale-105 transition-all duration-500 hover:border-gold-400/50">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-500 font-cinzel mb-3 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-white/80 text-base font-semibold">Years Experience</div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine hover:scale-105 transition-all duration-500 hover:border-gold-400/50">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-500 font-cinzel mb-3 group-hover:scale-110 transition-transform">10K+</div>
              <div className="text-white/80 text-base font-semibold">Lives Transformed</div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine hover:scale-105 transition-all duration-500 hover:border-gold-400/50">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-500 font-cinzel mb-3 group-hover:scale-110 transition-transform">2</div>
              <div className="text-white/80 text-base font-semibold">PhDs in Spiritual Sciences</div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine hover:scale-105 transition-all duration-500 hover:border-gold-400/50">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-500 font-cinzel mb-3 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-white/80 text-base font-semibold">Authentic Guidance</div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>

          {/* Redesigned Features Grid with Better Visual Hierarchy */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative group">
                {/* Main Image with Enhanced Effects */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={amethystCrystalsImg}
                    alt="Beautiful amethyst crystals representing the spiritual and healing energy of Agnni Predictions services"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-luxury-500/40 group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'contrast(1.2) saturate(1.3) brightness(1.1)' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-purple-500/10 rounded-3xl"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-2xl animate-float border-4 border-white/20">
                  <div className="text-center">
                    <Star className="w-12 h-12 text-black mx-auto mb-1" />
                    <div className="text-black font-bold text-xs">TRUSTED</div>
                  </div>
                </div>
                
                {/* Testimonial Card */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-luxury-900/95 to-divine-900/95 border border-luxury-400/40 rounded-3xl p-6 backdrop-blur-md shadow-2xl max-w-xs">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gold-400 font-bold text-sm">5.0</span>
                  </div>
                  <p className="text-white/90 text-sm font-semibold mb-2">Trusted by</p>
                  <p className="text-gold-400 text-lg font-bold">Bollywood & TV Stars</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gold-400/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Enhanced Features Side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="group bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-500 hover:border-gold-400/50 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Star className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-luxury-200 to-gold-300 mb-3">Divine Guidance with Depth</h3>
                    <p className="text-white/80 leading-relaxed text-lg">Blending ancient wisdom with modern insights for authentic spiritual solutions that truly transform lives.</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/50 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-luxury-200 to-purple-300 mb-3">Holistic Spiritual Solutions</h3>
                    <p className="text-white/80 leading-relaxed text-lg">From Tarot to Tantra, Angel Healing to Vastu - complete spiritual transformation in one sacred space.</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-luxury-900/80 to-divine-900/80 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:border-blue-400/50 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-blue-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-luxury-200 to-blue-300 mb-3">Blessed Products & Mantras</h3>
                    <p className="text-white/80 leading-relaxed text-lg">Limited-edition crystals, Black Salt, and spiritual tools blessed with sacred chants and divine energy.</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section with Background */}
      <section 
        className="py-24 relative bg-luxury-900 animate-on-scroll"
        aria-labelledby="sacred-services-heading"
        style={{
          backgroundImage: `linear-gradient(rgba(88, 28, 135, 0.85), rgba(88, 28, 135, 0.85)), url(${astrologyZodiacImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 id="sacred-services-heading" className="text-4xl lg:text-5xl font-bold font-cinzel text-luxury-300 mb-8">
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
              image={bokehGlitterImg}
            />
          </div>

          <a 
            href="/consultation"
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

      {/* Interactive FAQ Section */}
      <div className="animate-on-scroll">
        <InteractiveFAQ />
      </div>

      {/* Final CTA Section with Video Background */}
      <section 
        id="consultation-cta" 
        className="py-24 relative bg-gradient-to-t from-divine-900 to-luxury-900 animate-on-scroll"
      >
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-15 pointer-events-none"
            style={{ filter: 'blur(2px)' }}
          >
            <source src={angelHealingVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-divine-900/90 to-luxury-900/80 pointer-events-none"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
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
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
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
  <article 
    className="group bg-gradient-to-br from-luxury-900/50 to-divine-900/50 rounded-3xl border border-luxury-500/30 overflow-hidden backdrop-blur-md hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-on-scroll"
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = '/Consultation';
      }
    }}
    aria-label={`Learn more about ${title} - ${description}`}
  >
    <div className="relative h-56 overflow-hidden">
      <img 
        src={image} 
        alt={`${title} service illustration showing mystical spiritual elements`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        loading="lazy"
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
  </article>
);

export default PremiumHome;
