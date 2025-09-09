import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { X, ShoppingCart, Eye, Star, Sparkles, Heart, Shield, Zap, DollarSign } from 'lucide-react';

// Import crystal images
import amethystImg from '../assets/images/crystals/amethyst-bracelet.webp';
import lapisLazuliImg from '../assets/images/crystals/lapis-lazuli.webp';
import tigerEyeImg from '../assets/images/crystals/tiger-eye-stone.webp';
import pyriteImg from '../assets/images/crystals/pyrite.webp';
import blackSaltImg from '../assets/images/crystals/black-salt.webp';
import garnetImg from '../assets/images/crystals/garnet.webp';
import carnelianImg from '../assets/images/crystals/carnelian.webp';

interface Crystal {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  properties: string[];
  category: 'healing' | 'protection' | 'manifestation' | 'cleansing';
  icon: React.ReactNode;
  energy: string;
  chakra: string;
}

interface CrystalModalProps {
  crystal: Crystal | null;
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (crystal: Crystal) => void;
}

const CrystalModal: React.FC<CrystalModalProps> = ({ crystal, isOpen, onClose, onPurchase }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: onClose
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';

      if (modalRef.current) {
        gsap.fromTo(modalRef.current,
          { opacity: 0, scale: 0.8, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      firstElement?.focus();
      modalRef.current.addEventListener('keydown', handleTabKeyPress);

      return () => {
        modalRef.current?.removeEventListener('keydown', handleTabKeyPress);
      };
    }
  }, [isOpen]);

  if (!crystal || !isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/src/assets/images/backgrounds/particle-overlay.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        position: 'fixed'
      }}
    >
      <div
        ref={modalRef}
        className="max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-luxury-900 to-divine-900 rounded-3xl border border-luxury-500/30 overflow-hidden shadow-divine mx-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="crystal-modal-title"
      >
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-10 interactive"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="relative">
              <img
                src={crystal.image}
                alt={`${crystal.name} crystal - ${crystal.subtitle}. ${crystal.description.slice(0, 100)}...`}
                className="w-full h-96 object-cover rounded-2xl shadow-luxury"
                style={{ filter: 'contrast(1.1) saturate(1.3)' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              <div className="absolute top-4 left-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                {crystal.price}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  {crystal.icon}
                  <h2 id="crystal-modal-title" className="text-3xl font-bold font-cinzel text-luxury-300">
                    {crystal.name}
                  </h2>
                </div>
                <p className="text-luxury-400 font-inter text-lg">
                  {crystal.subtitle}
                </p>
              </div>

              <p className="text-white/80 leading-relaxed font-inter">
                {crystal.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-bold text-gold-400 mb-1">Energy</h4>
                  <p className="text-white/70">{crystal.energy}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gold-400 mb-1">Chakra</h4>
                  <p className="text-white/70">{crystal.chakra}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gold-400 mb-3">Crystal Properties</h4>
                <div className="flex flex-wrap gap-2">
                  {crystal.properties.map((property, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-luxury-800/50 rounded-full text-sm text-white/80 border border-luxury-500/30"
                    >
                      {property}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onPurchase(crystal)}
                className="w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold font-inter cta-button interactive flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Sacred Collection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveCrystalGallery: React.FC = () => {
  const [selectedCrystal, setSelectedCrystal] = useState<Crystal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const galleryRef = useRef<HTMLDivElement>(null);

  const crystals: Crystal[] = [
    {
      id: 1,
      name: "Amethyst",
      subtitle: "Peace & Intuition",
      description: "Sacred amethyst awakens your third eye chakra, enhancing intuition and bringing deep inner peace. This master healing crystal protects against negative energies while promoting spiritual growth and clarity of mind.",
      price: "₹899",
      image: amethystImg,
      properties: ["Intuition", "Peace", "Protection", "Spiritual Growth"],
      category: 'healing',
      icon: <Heart className="w-6 h-6 text-purple-400" />,
      energy: "Calming & Spiritual",
      chakra: "Third Eye & Crown"
    },
    {
      id: 2,
      name: "Lapis Lazuli",
      subtitle: "Truth & Wisdom",
      description: "The stone of truth and wisdom, Lapis Lazuli has been treasured since ancient times. It enhances communication, promotes self-awareness, and connects you to divine wisdom while encouraging honest expression.",
      price: "₹1,299",
      image: lapisLazuliImg,
      properties: ["Truth", "Wisdom", "Communication", "Self-Awareness"],
      category: 'manifestation',
      icon: <Eye className="w-6 h-6 text-blue-400" />,
      energy: "Enlightening & Wise",
      chakra: "Throat & Third Eye"
    },
    {
      id: 3,
      name: "Tiger's Eye",
      subtitle: "Protection & Confidence",
      description: "A powerful protection stone that combines earth energy with sun energy. Tiger's Eye boosts confidence, courage, and personal power while providing grounding and protection from negative influences.",
      price: "₹799",
      image: tigerEyeImg,
      properties: ["Protection", "Confidence", "Courage", "Grounding"],
      category: 'protection',
      icon: <Shield className="w-6 h-6 text-amber-400" />,
      energy: "Protective & Empowering",
      chakra: "Solar Plexus & Root"
    },
    {
      id: 4,
      name: "Pyrite",
      subtitle: "Wealth & Manifestation",
      description: "Known as Fool's Gold, Pyrite is actually a powerful manifestation stone. It attracts abundance, wealth, and prosperity while boosting confidence and willpower to achieve your goals.",
      price: "₹699",
      image: pyriteImg,
      properties: ["Abundance", "Manifestation", "Confidence", "Prosperity"],
      category: 'manifestation',
      icon: <DollarSign className="w-6 h-6 text-gold-400" />,
      energy: "Abundant & Dynamic",
      chakra: "Solar Plexus"
    },
    {
      id: 5,
      name: "Black Salt",
      subtitle: "Nazar Removal",
      description: "Sacred black salt blessed with 1 lakh mantras by Dr. Pranjal D. Sharma. This powerful spiritual product removes negative energies, evil eye, and creates protective barriers around your space and aura.",
      price: "₹449",
      image: blackSaltImg,
      properties: ["Evil Eye Protection", "Negative Energy Removal", "Spiritual Cleansing", "Sacred Blessing"],
      category: 'cleansing',
      icon: <Sparkles className="w-6 h-6 text-gray-300" />,
      energy: "Protective & Cleansing",
      chakra: "All Chakras"
    },
    {
      id: 6,
      name: "Garnet",
      subtitle: "Passion & Vitality",
      description: "The stone of passion and vitality, Garnet ignites the fire within. It enhances creativity, boosts energy levels, and inspires love and devotion while providing grounding and stability.",
      price: "₹999",
      image: garnetImg,
      properties: ["Passion", "Vitality", "Creativity", "Love"],
      category: 'healing',
      icon: <Zap className="w-6 h-6 text-red-400" />,
      energy: "Passionate & Energizing",
      chakra: "Root & Sacral"
    },
    {
      id: 7,
      name: "Carnelian",
      subtitle: "Motivation & Courage",
      description: "A stone of motivation and courage, Carnelian stimulates creativity and gives you the confidence to make positive life choices. It's perfect for overcoming fear and taking bold action.",
      price: "₹649",
      image: carnelianImg,
      properties: ["Motivation", "Courage", "Creativity", "Confidence"],
      category: 'manifestation',
      icon: <Star className="w-6 h-6 text-orange-400" />,
      energy: "Motivating & Bold",
      chakra: "Sacral & Solar Plexus"
    }
  ];

  const filteredCrystals = filter === 'all' 
    ? crystals 
    : crystals.filter(crystal => crystal.category === filter);

  const filters = [
    { key: 'all', label: 'All Crystals' },
    { key: 'healing', label: 'Healing' },
    { key: 'protection', label: 'Protection' },
    { key: 'manifestation', label: 'Manifestation' },
    { key: 'cleansing', label: 'Cleansing' }
  ];

  const openModal = (crystal: Crystal) => {
    setSelectedCrystal(crystal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCrystal(null), 300);
  };

  const handlePurchase = (crystal: Crystal) => {
    console.log('Purchasing:', crystal.name);
    // Handle purchase logic here
    closeModal();
  };

  useEffect(() => {
    // Animate gallery cards on filter change
    if (galleryRef.current) {
      const cards = galleryRef.current.querySelectorAll('.crystal-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, [filter]);

  return (
    <section 
      className="py-20 section-morph animate-on-scroll" 
      data-bg-type="products"
      aria-labelledby="crystal-collection-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-luxury-400 mr-2 animate-pulse" aria-hidden="true" />
            <h2 id="crystal-collection-heading" className="text-4xl font-bold font-cinzel text-luxury-300">
              Sacred Crystal Collection
            </h2>
            <Sparkles className="w-6 h-6 text-luxury-400 ml-2 animate-pulse" aria-hidden="true" />
          </div>
          <p className="text-white/80 text-lg font-inter max-w-3xl mx-auto">
            Each crystal is 100% authentic, cleansed, and energized before dispatch. 
            Blessed with divine mantras for maximum spiritual potency.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 interactive ${
                filter === filterOption.key
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black shadow-gold'
                  : 'bg-luxury-800/50 text-white/80 hover:bg-luxury-700/50 hover:text-white border border-luxury-500/30'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Crystal Gallery */}
        <div 
          ref={galleryRef}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {filteredCrystals.map((crystal, index) => (
            <article
              key={crystal.id}
              className="crystal-card group relative bg-gradient-to-br from-luxury-900/40 to-divine-900/40 rounded-3xl border border-luxury-500/30 overflow-hidden backdrop-blur-md hover:shadow-divine transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(crystal)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(crystal);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${crystal.name} - ${crystal.subtitle}. Price: ${crystal.price}`}
              style={{ opacity: 0 }}
            >
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-500/10 via-transparent to-divine-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={crystal.image}
                  alt={`${crystal.name} crystal bracelet - beautiful ${crystal.properties.join(', ')} stone for ${crystal.energy.toLowerCase()}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {crystal.price}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  {crystal.icon}
                  <div>
                    <h3 className="text-xl font-bold font-cinzel text-luxury-300">
                      {crystal.name}
                    </h3>
                    <p className="text-luxury-400 font-inter text-sm">
                      {crystal.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 text-sm font-inter line-clamp-3">
                  {crystal.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {crystal.properties.slice(0, 3).map((property, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-luxury-800/50 rounded-full text-xs text-white/70"
                    >
                      {property}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-16 p-6 bg-gradient-to-r from-luxury-900/30 to-divine-900/30 rounded-2xl border border-luxury-500/30">
          <p className="text-white/80 font-inter">
            <strong className="text-gold-400">Note:</strong> All crystals are blessed with sacred mantras and come with authenticity certificates. 
            Custom crystal combinations available upon consultation.
          </p>
        </div>
      </div>

      {/* Crystal Modal */}
      <CrystalModal
        crystal={selectedCrystal}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPurchase={handlePurchase}
      />
    </section>
  );
};

export default InteractiveCrystalGallery;