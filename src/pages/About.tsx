import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CrownDecoration from '../components/CrownDecoration';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Star, Heart, Shield, BookOpen } from 'lucide-react';
import "/fonts.css";

// Import assets
import aboutPortrait from '../assets/images/misc/palmistry-hand.webp';
import signatureBg from '../assets/images/backgrounds/tarot-altar.webp';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-divine-900 text-white font-inter overflow-hidden">
      <Navbar />
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-luxury-900 to-divine-900">
        <div className="absolute inset-0 opacity-10">
          <img src="/src/assets/images/backgrounds/astrology-zodiac.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h1 className="text-5xl md:text-7xl font-bold font-cinzel text-luxury-300 mt-4">
            About Dr. Pranjal D. Sharma
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6">
            A journey of three decades dedicated to spiritual healing, cosmic wisdom, and profound transformation.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl z-0"></div>
              <img 
                src={aboutPortrait} 
                alt="Dr. Pranjal D. Sharma" 
                className="relative z-10 rounded-3xl shadow-divine w-full h-auto object-cover border-4 border-luxury-500/20"
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              <h2 className="font-cinzel text-4xl font-bold text-gold-400">A Legacy of Healing</h2>
              <p className="text-lg text-white/80 leading-relaxed font-serif">
                Agnni Predictions, founded by Dr. Pranjal D. Sharma, is a holistic spiritual destination dedicated to guiding individuals towards clarity, healing, and transformation. With over 30 years of experience in astrology, numerology, tarot, Vastu Shastra, tantra, and energy healing, Dr. Sharma has helped more than 10,000 people worldwide, including prominent names from Bollywood and Indian television.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-serif">
                At Agnni Predictions, we believe that spirituality is not just about rituals—it is about empowerment and balance. Every service is designed to bring harmony to your mind, body, spirit, and surroundings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <Milestones />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-luxury-900">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
          <div className="space-y-4">
            <h3 className="font-cinzel text-3xl font-bold text-purple-300">Our Mission</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To uplift and empower humanity by offering authentic spiritual guidance, healing practices, and cosmic wisdom that help individuals navigate life's challenges with confidence and positivity.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-cinzel text-3xl font-bold text-pink-300">Our Vision</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Dr. Sharma envisions a spiritually awakened world where individuals live in alignment with universal energies. Soon, Agnni Predictions will launch a Gurukul, a spiritual school dedicated to nurturing the next generation of healers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className="py-24 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${signatureBg})` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-luxury-300">
              Why Choose Agnni Predictions
            </h2>
            <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto">
              "My mission is to uplift human consciousness through divine practices." – Dr. Pranjal D. Sharma
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseCard icon={<Star />} title="Divine Guidance" description="Blending ancient wisdom with modern challenges for authentic spiritual solutions." />
            <WhyChooseCard icon={<Heart />} title="Trusted Experience" description="3 decades of consultations, 2 PhDs, and global clientele including celebrities." />
            <WhyChooseCard icon={<Shield />} title="Holistic Solutions" description="From Tarot to Tantra, Angel Healing to Vastu - complete spiritual transformation." />
            <WhyChooseCard icon={<BookOpen />} title="Mantra-Infused Products" description="Limited-edition Black Salt, Dhoop, and crystals blessed with sacred chants." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Milestones = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <MilestoneItem end={30} suffix="+" label="Years of Experience" inView={inView} />
        <MilestoneItem end={10000} suffix="+" label="Lives Impacted" inView={inView} />
        <MilestoneItem end={2} label="Ph.Ds in Spiritual Sciences" inView={inView} />
        <MilestoneItem end={100} suffix="%" label="Authenticity & Compassion" inView={inView} />
      </div>
    </div>
  );
};

const MilestoneItem = ({ end, suffix, label, inView }) => (
  <div className="space-y-2">
    <div className="font-cinzel text-5xl md:text-6xl font-bold text-gold-400">
      {inView && <CountUp end={end} duration={3} suffix={suffix} />}
    </div>
    <p className="text-white/70 font-inter">{label}</p>
  </div>
);

const WhyChooseCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-luxury-900/70 to-divine-900/70 p-8 rounded-2xl border border-luxury-500/30 backdrop-blur-lg text-center space-y-4 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-black">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="font-cinzel text-2xl font-bold text-luxury-300">{title}</h3>
    <p className="text-white/70 leading-relaxed">{description}</p>
  </div>
);

export default About;