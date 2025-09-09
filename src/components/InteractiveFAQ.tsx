import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Play, Pause, Volume2, VolumeX, Star, Sparkles, Eye, Heart, Zap } from 'lucide-react';

// Import multimedia assets
import angelHealingVideo from '../assets/videos/angel-healing.mp4';
import horoscopeVideo from '../assets/videos/horoscope.mp4';
import painToPeaceVideo from '../assets/videos/pain-to-peace.mp4';
import tarotCardsImg from '../assets/images/services/tarot-cards-display.webp';
import crystalHealingImg from '../assets/images/services/crystal-healing-session.webp';
import angelReadingImg from '../assets/images/services/angel-reading.webp';
import numerologyImg from '../assets/images/services/numerology-report.webp';
import vastusImg from '../assets/images/services/vastu-consultation.webp';
import amethystImg from '../assets/images/crystals/amethyst-bracelet.webp';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'services' | 'spiritual' | 'consultation' | 'products';
  multimedia?: {
    type: 'video' | 'image';
    src: string;
    alt?: string;
    autoplay?: boolean;
    loop?: boolean;
  };
  icon: React.ReactNode;
  highlighted?: boolean;
}

interface FAQVideoPlayerProps {
  src: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

const FAQVideoPlayer: React.FC<FAQVideoPlayerProps> = ({
  src,
  isPlaying,
  onTogglePlay,
  isMuted,
  onToggleMute
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-luxury">
      <video
        ref={videoRef}
        src={src}
        loop
        muted={isMuted}
        className="w-full h-48 sm:h-64 object-cover"
        style={{ filter: 'contrast(1.1) saturate(1.2)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* Video Controls */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center space-x-2">
        <button
          onClick={onTogglePlay}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />}
        </button>
        
        <button
          onClick={onToggleMute}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
        </button>
      </div>
    </div>
  );
};

const InteractiveFAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [videoStates, setVideoStates] = useState<{[key: number]: {isPlaying: boolean; isMuted: boolean}}>({});
  const faqRef = useRef<HTMLDivElement>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What can Tarot Card Reading help me with?",
      answer: "Tarot is a mirror to your subconscious mind. It helps you gain clarity in relationships, career, finances, and personal growth. With over three decades of guiding clients, including celebrities, I use Tarot to provide direction and uncover solutions you may not see yourself. Each card drawn carries deep symbolic meaning that resonates with your current life situation.",
      category: 'services',
      multimedia: {
        type: 'image',
        src: tarotCardsImg,
        alt: "Tarot Cards Layout"
      },
      icon: <Star className="w-6 h-6 text-purple-400" />,
      highlighted: true
    },
    {
      id: 2,
      question: "How is Numerology different from Astrology?",
      answer: "Astrology studies cosmic forces through your birth chart, while Numerology decodes the hidden power of numbers in your name and date of birth. Together, they reveal your destiny, strengths, challenges, and the right timings for important life events. Numerology provides practical insights for daily decisions, while astrology offers a cosmic perspective on your life path.",
      category: 'spiritual',
      multimedia: {
        type: 'video',
        src: horoscopeVideo,
        autoplay: false,
        loop: true
      },
      icon: <Sparkles className="w-6 h-6 text-gold-400" />
    },
    {
      id: 3,
      question: "Can Vastu really change my life?",
      answer: "Yes, absolutely. Vastu Shastra is about aligning your home and workspace with universal energies. When balanced correctly, your environment supports prosperity, harmony, and well-being. Many clients have experienced peace and success after simple yet powerful changes in their spaces. The arrangement of elements in your surroundings directly influences your mental state and life outcomes.",
      category: 'services',
      multimedia: {
        type: 'image',
        src: vastusImg,
        alt: "Vastu Consultation Setup"
      },
      icon: <Eye className="w-6 h-6 text-blue-400" />
    },
    {
      id: 4,
      question: "How do you handle Black Magic or negative energy issues?",
      answer: "As a certified Tantracharya, I have mastered ancient techniques of Tantra to neutralize dark energies and spiritual blockages. Through powerful rituals, sacred mantras, and spiritual empowerment, I help clients overcome black magic influences and restore balance to their lives. Protection spells and energetic shields are created to prevent future attacks.",
      category: 'spiritual',
      multimedia: {
        type: 'video',
        src: angelHealingVideo,
        autoplay: false,
        loop: true
      },
      icon: <Zap className="w-6 h-6 text-red-400" />
    },
    {
      id: 5,
      question: "What is Angel Healing and how does it work?",
      answer: "Angel Healing is a gentle yet powerful method where I channel angelic energies to heal emotional wounds, release fear, and bring peace. It connects you with your guardian angels, allowing divine light to flow into your life. During sessions, you may feel warmth, tingling, or profound peace as angelic frequencies work to restore balance to your mind, body, and spirit.",
      category: 'services',
      multimedia: {
        type: 'image',
        src: angelReadingImg,
        alt: "Angel Healing Session"
      },
      icon: <Heart className="w-6 h-6 text-pink-400" />
    },
    {
      id: 6,
      question: "Can Crystal Healing really improve my well-being?",
      answer: "Absolutely. Crystals carry specific vibrational energies that resonate with our mind, body, and spirit. By placing them strategically or using them during healing sessions, I help clients balance emotions, reduce stress, and attract positive energy. Each crystal has unique properties - amethyst for peace, rose quartz for love, and black tourmaline for protection.",
      category: 'products',
      multimedia: {
        type: 'image',
        src: crystalHealingImg,
        alt: "Crystal Healing Session"
      },
      icon: <Sparkles className="w-6 h-6 text-purple-400" />
    },
    {
      id: 7,
      question: "Who should consult Agnni Predictions?",
      answer: "Anyone seeking clarity, healing, or spiritual solutions - whether you're facing personal struggles, career blocks, relationship issues, or feeling spiritually stuck. I have guided over 10,000 people, from individuals to Bollywood stars, helping them transform challenges into opportunities. My approach is compassionate, non-judgmental, and focused on empowering you with practical spiritual wisdom.",
      category: 'consultation',
      multimedia: {
        type: 'video',
        src: painToPeaceVideo,
        autoplay: false,
        loop: true
      },
      icon: <Heart className="w-6 h-6 text-gold-400" />,
      highlighted: true
    },
    {
      id: 8,
      question: "How do I prepare for my first consultation?",
      answer: "Come with an open mind and specific questions you'd like guidance on. For astrology readings, bring your exact birth time, date, and place. For Tarot, focus on areas where you need clarity. Wear comfortable clothes and avoid heavy meals before the session. Most importantly, trust the process and be ready to receive divine insights that can transform your life path.",
      category: 'consultation',
      multimedia: {
        type: 'image',
        src: numerologyImg,
        alt: "Consultation Preparation"
      },
      icon: <Star className="w-6 h-6 text-blue-400" />
    }
  ];

  const filteredFAQs = filter === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === filter);

  const filters = [
    { key: 'all', label: 'All Questions', count: faqItems.length },
    { key: 'services', label: 'Services', count: faqItems.filter(item => item.category === 'services').length },
    { key: 'spiritual', label: 'Spiritual Practice', count: faqItems.filter(item => item.category === 'spiritual').length },
    { key: 'consultation', label: 'Consultation', count: faqItems.filter(item => item.category === 'consultation').length },
    { key: 'products', label: 'Products', count: faqItems.filter(item => item.category === 'products').length }
  ];

  const toggleAccordion = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const toggleVideo = (id: number) => {
    setVideoStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isPlaying: !prev[id]?.isPlaying
      }
    }));
  };

  const toggleMute = (id: number) => {
    setVideoStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMuted: !prev[id]?.isMuted
      }
    }));
  };

  // Initialize video states
  useEffect(() => {
    const videoItems = faqItems.filter(item => item.multimedia?.type === 'video');
    const initialStates: {[key: number]: {isPlaying: boolean; isMuted: boolean}} = {};
    
    videoItems.forEach(item => {
      initialStates[item.id] = {
        isPlaying: false,
        isMuted: true
      };
    });
    
    setVideoStates(initialStates);
  }, []);

  // Animate FAQ items when filter changes
  useEffect(() => {
    if (faqRef.current) {
      const items = faqRef.current.querySelectorAll('.faq-item');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, [filter]);

  // Animate accordion content
  useEffect(() => {
    if (activeItem !== null) {
      const activeContent = document.getElementById(`faq-content-${activeItem}`);
      if (activeContent) {
        gsap.fromTo(activeContent,
          { height: 0, opacity: 0 },
          { 
            height: 'auto',
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
          }
        );
      }
    }
  }, [activeItem]);

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-900 via-divine-900 to-luxury-900 animate-on-scroll">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-luxury-400 mr-3 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold font-cinzel text-luxury-300">
              Frequently Asked Questions
            </h2>
            <Sparkles className="w-8 h-8 text-luxury-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-white/80 font-inter max-w-4xl mx-auto leading-relaxed">
            Explore the most commonly asked questions about our spiritual services, divine practices, and transformative consultations. 
            Each answer is enriched with multimedia content to deepen your understanding.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-inter font-medium transition-all duration-300 interactive text-sm sm:text-base ${
                filter === filterOption.key
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black shadow-gold'
                  : 'bg-luxury-800/50 text-white/80 hover:bg-luxury-700/50 hover:text-white border border-luxury-500/30'
              }`}
            >
              <span className="relative z-10">{filterOption.label}</span>
              <span className={`ml-1 sm:ml-2 px-1 sm:px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                filter === filterOption.key
                  ? 'bg-black/20 text-black'
                  : 'bg-white/10 text-white/60 group-hover:bg-white/20'
              }`}>
                {filterOption.count}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className="space-y-6">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className={`faq-item group bg-gradient-to-br from-luxury-900/60 to-divine-900/60 rounded-3xl border border-luxury-500/30 overflow-hidden backdrop-blur-md transition-all duration-500 ${
                item.highlighted ? 'ring-2 ring-gold-500/30' : ''
              } ${
                activeItem === item.id ? 'shadow-divine' : 'hover:shadow-luxury'
              }`}
              style={{ opacity: 0 }}
            >
              {/* Question Header */}
              <div
                className="p-4 sm:p-6 cursor-pointer"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <div className="flex-shrink-0 mt-1 sm:mt-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold font-cinzel text-luxury-300 group-hover:text-white transition-colors duration-300 break-words">
                        {item.question}
                      </h3>
                      {item.highlighted && (
                        <span className="inline-block mt-2 px-2 sm:px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-luxury-400 transition-transform duration-300 flex-shrink-0 mt-1 sm:mt-0 ${
                      activeItem === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Answer Content */}
              {activeItem === item.id && (
                <div
                  id={`faq-content-${item.id}`}
                  className="px-4 sm:px-6 pb-4 sm:pb-6"
                  style={{ height: 0, opacity: 0, overflow: 'hidden' }}
                >
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                    {/* Text Content */}
                    <div className="space-y-4 order-2 lg:order-1">
                      <p className="text-white/90 leading-relaxed font-inter text-base sm:text-lg">
                        {item.answer}
                      </p>
                      
                      {/* Category Badge */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="px-2 sm:px-3 py-1 bg-luxury-800/50 text-luxury-300 text-xs sm:text-sm font-medium rounded-full capitalize">
                          {item.category}
                        </span>
                        {item.category === 'services' && (
                          <a
                            href="/Consultation"
                            className="text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-medium transition-colors duration-300"
                          >
                            Book This Service →
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Multimedia Content */}
                    {item.multimedia && (
                      <div className="w-full order-1 lg:order-2">
                        {item.multimedia.type === 'video' ? (
                          <FAQVideoPlayer
                            src={item.multimedia.src}
                            isPlaying={videoStates[item.id]?.isPlaying || false}
                            onTogglePlay={() => toggleVideo(item.id)}
                            isMuted={videoStates[item.id]?.isMuted !== false}
                            onToggleMute={() => toggleMute(item.id)}
                          />
                        ) : (
                          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-luxury">
                            <img
                              src={item.multimedia.src}
                              alt={item.multimedia.alt || item.question}
                              className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                              style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-luxury-900/50 to-divine-900/50 rounded-3xl border border-luxury-500/30 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold font-cinzel text-luxury-300 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/80 font-inter mb-6 max-w-2xl mx-auto">
              Every spiritual journey is unique. If you have specific questions that aren't covered here, 
              I'm here to provide personalized guidance through a consultation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter cta-button interactive transform hover:scale-105"
            >
              <span>Ask Your Question</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFAQ;