import React, { useState, useEffect } from "react";
import { Star, Moon, Sun, Gem, ChevronLeft, ChevronRight } from "lucide-react";
import background from "../assets/images/background.jpg";
import Hero from "../assets/images/hero1.webp";
import Hero2 from "../assets/images/hero2.webp";
import Hand from "../assets/images/hand-dark.png";
import Cards from "../assets/images/cards.png";
import Service from "../components/service";
import ServiceSlider from "../components/ServiceSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";
import CourseSlider from "../components/CourseSlider";
import NewsLetter from "../components/NewsLetter";
import FooterMenu from "../components/FooterMenu";
import cardimage from '../assets/images/33.webp';
import cardimage2 from '../assets/images/46.webp';

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


  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const faqs = [
    {
      question: "How does tarot reading work online?",
      answer:
        "Our experienced readers connect with your energy through focused intention and years of practice. We use video calls to create a personal connection and provide accurate readings that resonate with your spiritual journey.",
    },
    {
      question: "What can I expect from my first reading?",
      answer:
        "Your first reading will begin with a brief consultation to understand your questions and concerns. We'll then perform the reading using our intuitive abilities and provide detailed explanations of each card's meaning and how it relates to your situation.",
    },
    {
      question: "How can I trust Card Reading Help me?",
      answer:
        "We have years of experience and hundreds of satisfied clients worldwide. All our readers are certified professionals with proven track records of accurate predictions and spiritual guidance that have transformed countless lives.",
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
        <div className="absolute top-1/4 left-1/3 animate-float">
          <div className="w-8 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-60 shadow-2xl transform rotate-12"></div>
        </div>
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

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative text-white"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
        data-aos="fade-in"
      >
        {/* Bottom to top stronger blur gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>

        {/* Optional subtle left-to-right gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Right-side text content (inverted) */}
          <div className="order-2 md:order-1"></div>

          {/* Left-side text content */}
          <div className="relative order-1 md:order-2 h-[400px]">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-right md:text-left font-britannic"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Confused with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Life?
              </span>
            </h1>
            <h2
              className="text-3xl md:text-4xl mb-6 text-right md:text-left font-futura"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get a <span className="text-yellow-400">Tarot Reading</span> done.
            </h2>
            <p
              className="text-xl mb-8 opacity-90 leading-relaxed text-right md:text-left font-futura"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Get a Tarot Reading done to understand the Depth of the Situation
              and Resolve it.
            </p>
            <div
              className="flex justify-end md:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full text-black font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center space-x-2 font-futura">
                <span className="rotate-180 inline-block">→</span>
                <span>Click to book an appointment</span>
              </button>
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
            Agnni Predictions is a sacred space created by Dr. Pranjal D.
            Sharma, where celestial guidance meets ancient wisdom. With over a
            decade of experience in spiritual sciences, she blends divine
            intuition with modern understanding to help individuals find
            healing, clarity, and direction.
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
                The Best feeling in the World is finally knowing you took a step
                in the right direction.
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed font-futura">
                Every spiritual journey begins with a single step of courage.
                Whether you seek clarity, healing, or divine connection, our
                guidance helps illuminate your path forward. Trust your
                intuition - you're exactly where you need to be.
              </p>
              <button className="font-futura bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-full text-black font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                Book Appointment
              </button>
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

      {/* Courses Section */}
      <CourseSlider />

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
        {/* Newsletter Section */}
        <NewsLetter />
        {/* Footer */}
        <FooterMenu />
      </section>
    </div>
  );
};

export default Home;
