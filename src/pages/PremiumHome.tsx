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

      {/* Why Choose Agnni Predictions - Redesigned */}
      <section 
        className="py-32 relative bg-gradient-to-b from-divine-900 to-luxury-900 animate-on-scroll"
        aria-labelledby="why-choose-agnni"
      >
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 pointer-events-none"
            style={{ filter: 'blur(1px)' }}
          >
            <source src={painToPeaceVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-divine-900/80 to-luxury-900/90 pointer-events-none"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 font-semibold">30 Years of Divine Guidance</span>
            </div>
            <h2 id="why-choose-agnni" className="text-5xl lg:text-6xl font-bold font-cinzel text-luxury-300 mb-6">
              Why Choose Agnni Predictions?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed font-inter max-w-4xl mx-auto">
              "My mission is to uplift human consciousness through divine practices." – Dr. Pranjal D. Sharma
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-2xl p-6 border border-luxury-500/20 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold-400 font-cinzel mb-2">30+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-2xl p-6 border border-luxury-500/20 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold-400 font-cinzel mb-2">10K+</div>
              <div className="text-white/80 text-sm">Lives Transformed</div>
            </div>
            <div className="text-center bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-2xl p-6 border border-luxury-500/20 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold-400 font-cinzel mb-2">2</div>
              <div className="text-white/80 text-sm">PhDs in Spiritual Sciences</div>
            </div>
            <div className="text-center bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-2xl p-6 border border-luxury-500/20 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold-400 font-cinzel mb-2">100%</div>
              <div className="text-white/80 text-sm">Authentic Guidance</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative animate-on-scroll order-2 lg:order-1">
              <div className="relative">
                <img
                  src={amethystCrystalsImg}
                  alt="Beautiful amethyst crystals representing the spiritual and healing energy of Agnni Predictions services"
                  className="w-full rounded-3xl shadow-divine border-2 border-luxury-500/30"
                  style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                  loading="lazy"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-gold-lg animate-pulse">
                  <Star className="w-16 h-16 text-black opacity-90" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-luxury-900 to-divine-900 border border-luxury-500/30 rounded-2xl p-4 backdrop-blur-md">
                  <div className="text-gold-400 text-sm font-semibold">Trusted by</div>
                  <div className="text-white text-lg font-bold">Bollywood & TV Stars</div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="space-y-8 animate-on-scroll order-1 lg:order-2">
              <div className="bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-cinzel text-luxury-300 mb-2">Divine Guidance with Depth</h3>
                    <p className="text-white/70 leading-relaxed">Blending ancient wisdom with modern insights for authentic spiritual solutions that truly transform lives.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-cinzel text-luxury-300 mb-2">Holistic Spiritual Solutions</h3>
                    <p className="text-white/70 leading-relaxed">From Tarot to Tantra, Angel Healing to Vastu - complete spiritual transformation in one sacred space.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-3xl p-8 border border-luxury-500/30 backdrop-blur-md hover:shadow-divine transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-cinzel text-luxury-300 mb-2">Blessed Products & Mantras</h3>
                    <p className="text-white/70 leading-relaxed">Limited-edition crystals, Black Salt, and spiritual tools blessed with sacred chants and divine energy.</p>
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
            href="/Consultation"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter cta-button interactive transform hover:scale-105 text-lg"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Sacred Products Section */}
      <section 
        className="py-24 bg-divine-900 animate-on-scroll"
        aria-labelledby="sacred-products-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="sacred-products-heading" className="text-4xl lg:text-5xl font-bold font-cinzel text-luxury-300 mb-8">
              Sacred Products & Crystals
            </h2>
            <p className="text-white/80 text-lg font-inter mb-8 max-w-3xl mx-auto">
              Discover our collection of blessed crystals, protective items, and spiritual tools, each infused with sacred energy and divine mantras.
            </p>
            
            {/* Cart Toggle Button */}
            {getCartCount() > 0 && (
              <div className="mb-8">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 px-6 rounded-xl hover:shadow-gold-lg transition-all duration-300 interactive transform hover:scale-105"
                >
                  <span>View Cart ({getCartCount()})</span>
                </button>
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/Shop"
              className="group inline-flex items-center space-x-3 bg-luxury-700 hover:bg-luxury-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-luxury-500/30 hover:border-luxury-400/50 font-inter interactive transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
