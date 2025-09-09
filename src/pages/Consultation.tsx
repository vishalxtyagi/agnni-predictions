import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CrownDecoration from "../components/CrownDecoration";
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
  const [activeService, setActiveService] = useState(consultationServices[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-divine-900 text-white font-inter overflow-hidden">
      <Navbar />
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-luxury-900 to-divine-900">
        <div className="absolute inset-0 opacity-10">
          <img src="/src/assets/images/backgrounds/purple-gradient.webp" alt="" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Sticky Service Display */}
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  className="rounded-3xl overflow-hidden border border-luxury-500/30 shadow-divine bg-gradient-to-br from-luxury-900 to-divine-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative h-80">
                    {activeService.video ? (
                      <video src={activeService.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                      <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
                    <h2 className="absolute bottom-6 left-6 text-3xl font-bold font-cinzel text-white">
                      {activeService.title}
                    </h2>
                  </div>
                  <div className="p-8 space-y-6">
                    <p className="text-white/80 text-lg leading-relaxed h-24">
                      {activeService.description}
                    </p>
                    <div className="flex items-center text-gold-400 font-bold text-2xl">
                      <span>₹1,299</span>
                      <span className="text-white/60 text-sm ml-2">/ session</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter cta-button interactive text-lg">
                      Book This Session
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Service List */}
            <div className="space-y-6">
              {consultationServices.map(service => (
                <ServiceListItem
                  key={service.id}
                  service={service}
                  isActive={activeService.id === service.id}
                  onHover={() => setActiveService(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ServiceListItem = ({ service, isActive, onHover }) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${isActive ? 'border-purple-400 bg-luxury-900/50 shadow-lg' : 'border-luxury-700/50 bg-transparent hover:bg-luxury-900/30'}`}
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center space-x-5">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-purple-400/20' : 'bg-luxury-700/50'}`}>
          <CheckCircle className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-purple-300' : 'text-white/60'}`} />
        </div>
        <div>
          <h3 className={`text-xl font-bold font-cinzel transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
            {service.title}
          </h3>
          <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-white/50'}`}>
            {isActive ? service.description : `${service.description.substring(0, 50)}...`}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Consultation;