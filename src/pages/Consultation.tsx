import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CrownDecoration from "../components/CrownDecoration";
import MagicalEffects from "../components/MagicalEffects";
import ScrollBasedEffects from "../components/ScrollBasedEffects";
import "/fonts.css";

// Import service assets
import tarotReadingImg from "../assets/images/services/tarot-reading.webp";
import angelReadingImg from "../assets/images/services/angel-reading.webp";
import crystalHealingImg from "../assets/images/services/glowing-healing-hands.webp";
import vastuConsultationImg from "../assets/images/services/vastu-consultation.webp";
import numerologyReportImg from "../assets/images/services/numerology-report.webp";
import astrologicalPredictionsImg from "../assets/images/services/astrological-predictions.webp";
import signatureAnalysisImg from "../assets/images/services/candlelit-tarot.webp";
import kundliMatchingImg from "../assets/images/services/tarot-spread.webp";
import blackMagicRemovalImg from "../assets/images/services/crystal-healing.webp";

import horoscopeVideo from "../assets/videos/horoscope.mp4";
import purpleGradientBg from "../assets/images/backgrounds/purple-gradient.webp";

const consultationServices = [
  { id: 'tarot', title: "Tarot Card Reading", description: "Decode energies of past, present & future to gain insights for love, career, and personal transformation.", image: tarotReadingImg },
  { id: 'angel', title: "Angel Reading", description: "Receive divine messages & angelic guidance from higher realms to realign your life purpose and discover inner peace.", image: angelReadingImg },
  { id: 'crystal', title: "Crystal Healing", description: "Rebalance chakras and cleanse your aura with intuitively chosen crystals for profound energy healing and spiritual alignment.", image: crystalHealingImg },
  { id: 'vastu', title: "Vastu Consultation", description: "Harmonize your living and working spaces with ancient Vastu wisdom to support prosperity, health, and happiness.", image: vastuConsultationImg },
  { id: 'numerology', title: "Numerology", description: "Discover your life path, personality, and destiny through the sacred power of numbers, unlocking hidden patterns.", image: numerologyReportImg },
  { id: 'astrology', title: "Astrological Predictions", description: "Personalized cosmic insights from your birth chart. Discover optimal timing for career, relationships, and spiritual growth.", image: astrologicalPredictionsImg, video: horoscopeVideo },
  { id: 'signature', title: "Signature Analysis", description: "Uncover subconscious patterns in your handwriting. Receive transformative insights into your personality and life patterns.", image: signatureAnalysisImg },
  { id: 'kundli', title: "Kundli Matching", description: "Sacred compatibility analysis for marriage and relationships. Discover cosmic harmony and potential challenges with your partner.", image: kundliMatchingImg },
  { id: 'b-magic', title: "Black Magic Removal", description: "Powerful protection from negative energies and harmful influences. Cleanse your aura and restore your spiritual balance.", image: blackMagicRemovalImg },
];

const Consultation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-divine-900 text-white font-inter overflow-hidden relative">
      {/* Magical Effects Layer */}
      <MagicalEffects page="consultation" intensity="medium" enableScrollTrigger={true} />
      
      {/* Scroll-Based Interactive Effects */}
      <ScrollBasedEffects className="z-10" />
      
      <Navbar />
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-luxury-900 to-divine-900">
        <div className="absolute inset-0 opacity-15">
          <img src={purpleGradientBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h1 className="text-5xl md:text-7xl font-bold font-cinzel text-luxury-300 mt-4">
            Consultation Services
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6">
            Embark on a transformative journey with Dr. Pranjal D. Sharma. Our services are designed to illuminate your path and empower your spirit.
          </p>
        </div>
      </div>

      <div className="py-24 bg-divine-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Simple Grid Layout for All Services */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {consultationServices.map(service => (
              <ConsultationServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ConsultationServiceCard = ({ service }) => {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-luxury-500/30 shadow-divine bg-gradient-to-br from-luxury-900/80 to-divine-900/80 hover:from-luxury-900 hover:to-divine-900 transition-all duration-300 group"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64">
        {service.video ? (
          <video 
            src={service.video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold font-cinzel text-white">
          {service.title}
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-white/80 leading-relaxed text-sm">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gold-400 font-bold text-xl">
            <span>₹1,299</span>
            <span className="text-white/60 text-sm ml-2">/ session</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter cta-button interactive group-hover:scale-105">
          Book This Session
        </button>
      </div>
    </motion.div>
  );
};

export default Consultation;