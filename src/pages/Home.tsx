import React, { useState, useEffect } from "react";
import { Star, Moon, Sun, Gem, ChevronLeft, ChevronRight } from "lucide-react";
import background from "../assets/images/backgrounds/purple-gradient.webp";
import Hero from "../assets/images/backgrounds/tarot-altar.webp";
import Hero2 from "../assets/images/backgrounds/amethyst-crystals.webp";
import Hero3 from "../assets/images/backgrounds/astrology-zodiac.webp";
import Hand from "../assets/images/misc/palmistry-hand.webp";
import Cards from "../assets/images/misc/mystical-cards.webp";
import Service from "../components/service";
import ServiceSlider from "../components/ServiceSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";
import FooterMenu from "../components/FooterMenu";
import cardimage from '../assets/images/services/tarot-cards-display.webp';
import cardimage2 from '../assets/images/services/crystal-healing-session.webp';
import fairyVideo from '../assets/videos/fairy.mp4';

import '/fonts.css'
// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

// Crown decoration component
import CrownDecoration from "../components/CrownDecoration";

const Home = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentCourse, setCurrentCourse] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    gender: "",
    birthdate: "",
  });

  const banners = [
    {
      image: Hero,
      title: "Awaken the Divine Within",
      subtitle: "Your gateway to cosmic healing, ancient wisdom, and spiritual transformation.",
      cta: "Book a Consultation",
      ctaLink: "/Consultation"
    },
    {
      image: Hero2, 
      title: "Crystal Healing & Energy Work",
      subtitle: "Rebalance your chakras and cleanse your aura with powerful crystal energies.",
      cta: "Explore Products",
      ctaLink: "/Shop"
    },
    {
      image: Hero3,
      title: "Astrological Predictions & Guidance", 
      subtitle: "Decode your birth chart for insights into career, love, health and destiny.",
      cta: "Get Reading",
      ctaLink: "/Consultation"
    }
  ];


  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  // Banner rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, [banners.length]);

  const faqs = [
    {
      question: "What can Tarot Card Reading help me with?",
      answer:
        "Tarot is a mirror to your subconscious. It helps you gain clarity in relationships, career, finances, and personal growth. With over three decades of guiding clients, including celebrities, I use Tarot to provide direction and uncover solutions you may not see yourself.",
    },
    {
      question: "How is Numerology different from Astrology?",
      answer:
        "Astrology is the study of cosmic forces through your birth chart, while Numerology decodes the hidden power of numbers in your name and date of birth. Together, they reveal your destiny, strengths, challenges, and the right timings for important life events.",
    },
    {
      question: "Can Vastu really change my life?",
      answer:
        "Yes. Vastu Shastra is about aligning your home and workspace with universal energies. When balanced correctly, your environment supports prosperity, harmony, and well-being. Many clients have experienced peace and success after simple yet powerful changes in their spaces.",
    },
    {
      question: "How do you handle Black Magic or negative energy issues?",
      answer:
        "As a Tantracharya, I have mastered techniques of Tantra to neutralize dark energies and spiritual blockages. Through rituals, mantras, and spiritual empowerment, I help clients overcome black magic influences and restore balance to their lives.",
    },
    {
      question: "What is Angel Healing and how does it work?",
      answer:
        "Angel Healing is a gentle yet powerful method where I channel angelic energies to heal emotional wounds, release fear, and bring peace. It connects you with your guardian angels, allowing divine light to flow into your life.",
    },
    {
      question: "Who should consult Agnni Predictions?",
      answer:
        "Anyone seeking clarity, healing, or solutions—whether you're facing personal struggles, career blocks, relationship issues, or feeling spiritually stuck. I have guided over 10,000 people, from common individuals to Bollywood stars, to transform challenges into opportunities.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request submitted successfully!");
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Mystical Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Mystical Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Flying Fairies */}
        <div className="absolute top-1/4 left-1/3 animate-float">
          <div className="w-4 h-4 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-70 shadow-xl">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Star className="w-4 h-4 text-purple-300 opacity-40" />
          </div>
        ))}

        {/* Mystical Orbs */}
        <div className="absolute top-1/2 right-1/4 animate-float delay-1000">
          <div className="w-8 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg opacity-60 shadow-2xl transform -rotate-12"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float delay-2000">
          <div className="w-8 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg opacity-60 shadow-2xl transform rotate-6"></div>
        </div>
        <div className="absolute top-20 right-1/3 animate-float delay-500">
          <div className="w-6 h-6 bg-yellow-400 rounded-full opacity-40 shadow-lg"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/5 animate-float delay-1500">
          <div className="w-4 h-4 bg-pink-400 rounded-full opacity-50 shadow-md"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
      `}</style>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Rotating Banners */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative text-white transition-all duration-1000"
        style={{
          backgroundImage: `url(${banners[currentBanner].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
        data-aos="fade-in"
      >
        {/* Bottom to top stronger blur gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>

        {/* Optional subtle left-to-right gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none"></div>

        {/* Banner Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBanner 
                  ? 'bg-purple-400 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Right-side text content (inverted) */}
          <div className="order-2 md:order-1"></div>

          {/* Left-side text content */}
          <div className="relative order-1 md:order-2 h-[400px]">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-right md:text-left font-britannic transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="100"
              key={`title-${currentBanner}`}
            >
              {banners[currentBanner].title.split(' ').slice(0, -2).join(' ')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {banners[currentBanner].title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p
              className="text-xl mb-8 opacity-90 leading-relaxed text-right md:text-left font-futura transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="300"
              key={`subtitle-${currentBanner}`}
            >
              {banners[currentBanner].subtitle}
            </p>
            
            {/* Key Highlights */}
            <div className="mb-8 text-right md:text-left" data-aos="fade-up" data-aos-delay="350">
              <div className="flex flex-wrap justify-end md:justify-start gap-4 text-sm font-futura">
                <span className="bg-purple-500/30 px-3 py-1 rounded-full">30+ Years Experience</span>
                <span className="bg-purple-500/30 px-3 py-1 rounded-full">10,000+ Lives Impacted</span>
                <span className="bg-purple-500/30 px-3 py-1 rounded-full">Celebrity Clientele</span>
              </div>
            </div>

            <div
              className="flex justify-end md:justify-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a 
                href={banners[currentBanner].ctaLink}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center space-x-2 font-futura"
              >
                <span>{banners[currentBanner].cta}</span>
              </a>
              <a 
                href="/Shop"
                className="border-2 border-white/30 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all font-futura"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-8 backdrop-blur-sm relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background image with low opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${Cards})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
            zIndex: 0,
          }}
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Content above everything */}
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-20">
          <div className="mb-8" data-aos="zoom-in">
            <CrownDecoration />
            <h2 className="text-4xl font-bold mb-8 font-britannic">
              About Agnni Predictions
            </h2>
          </div>
          <p
            className="text-xl leading-relaxed mb-8 opacity-90 font-futura"
            data-aos="fade-up"
          >
            Agnni Predictions, founded by Dr. Pranjal D. Sharma, is a holistic spiritual destination dedicated to guiding individuals towards clarity, healing, and transformation. With over 30 years of experience in astrology, numerology, tarot, Vastu Shastra, tantra, and energy healing, Dr. Sharma has helped more than 10,000 people worldwide, including prominent names from Bollywood and Indian television.
          </p>
          <p
            className="text-lg leading-relaxed mb-8 opacity-80 font-futura"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At Agnni Predictions, we believe that spirituality is not just about rituals—it is about empowerment and balance. Every service is designed to bring harmony to your mind, body, spirit, and surroundings.
          </p>
          <button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-full text-black font-semibold hover:shadow-xl transform hover:scale-105 transition-all font-futura"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSlider />

      {/* Tarot Reading Info Sections */}
      <section className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight font-britannic">
                A Step towards the future where everything that you never thought possible, is possible.
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed font-futura">
                Through the sacred mirror of divine guidance, we reveal the unseen—guiding you toward clarity, transformation, and the magic already woven into your path. Experience profound breakthroughs as you discover new layers of your relationships, purpose, and boundless potential.
              </p>
              <a 
                href="/Consultation"
                className="inline-block font-futura bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Book Consultation
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 p-4 rounded-2xl backdrop-blur-sm">
                <img
                  src={cardimage}
                  alt="Tarot Cards Spread"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 p-4 rounded-2xl backdrop-blur-sm">
                <img
                  src={cardimage2}
                  alt="Tarot Reading Session"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 leading-tight font-britannic">
                A Step towards the future where everything that you never
                thought possible, is possible.
              </h2>
              <p className="font-futura text-xl mb-8 opacity-90 leading-relaxed">
                Through the sacred mirror of tarot, we reveal the unseen—guiding
                you toward clarity, transformation, and the magic already woven
                into your path. Clients often experience profound breakthroughs,
                discovering new layers of their relationships, purpose, and the
                boundless potential waiting within them.
              </p>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-full text-black font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-8 bg-black/20 backdrop-blur-sm" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h2 className="text-4xl font-bold text-center mb-16 text-white font-britannic">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all duration-500 ${
                  openFaq === index
                    ? "bg-gradient-to-r from-orange-500 to-orange-600"
                    : "bg-purple-700/50"
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left font-semibold text-2xl flex justify-between items-center text-white hover:bg-white/10 transition-colors font-futura"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <img src={Hand} alt="Hand Icon" className="w-8 h-8 mr-4" />
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`transform transition-transform duration-500 ${
                      openFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 text-white">
                      <p className="leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Contact Section */}
      <section
        id="contact"
        className="pt-8 bg-black/20 backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h2
            className="text-4xl font-bold text-center mb-16 text-white"
            data-aos="fade-up"
          >
            Book an Appointment
          </h2>
          <div
            className="p-8 rounded-xl border border-dotted border-4"
            data-aos="zoom-in"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 text-white placeholder-white/70 focus:outline-none focus:border-orange-400"
                  required
                >
                  <option value="" className="text-gray-300 bg-purple-800">
                    Select Gender
                  </option>
                  <option value="male" className="text-black">
                    Male
                  </option>
                  <option value="female" className="text-black">
                    Female
                  </option>
                  <option value="other" className="text-black">
                    Other
                  </option>
                </select>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 text-white/70 focus:outline-none focus:border-orange-400"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                rows={6}
                required
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="font-futura bg-gradient-to-r from-orange-400 to-orange-800 px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Book an Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Footer */}
        <FooterMenu />
      </section>
    </div>
  );
};

export default Home;
