import React, { useEffect } from "react";
import background from "../assets/images/background.jpg";
import { Trophy, Phone, MessageCircle, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";
import "/fonts.css";

// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const About = () => {
  const whyMeCards = [
    {
      icon: <Trophy className="w-14 h-14 text-white-500" />,
      title: "Certified Expertise",
      description:
        "PhD in Tarot, Numerology & Tantra with 30+ years of spiritual leadership",
    },
    {
      icon: <Phone className="w-14 h-14 text-white-500" />,
      title: "Global Reach",
      description: "Trusted by clients across India, UAE, UK & USA",
    },
    {
      icon: <MessageCircle className="w-14 h-14 text-white-500" />,
      title: "Holistic Approach",
      description: "Blending divine intuition with modern understanding",
    },
    {
      icon: <Lock className="w-14 h-14 text-white-500" />,
      title: "Transformative Results",
      description: "10,000+ clients including film & TV celebrities",
    },
  ];

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

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
      <Navbar />

      {/* Header Section */}
      <div className="pt-20 pb-10 text-center" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4 font-britannic">
          About Agnni Predictions
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-futura">
          A sacred space where celestial guidance meets ancient wisdom
        </p>
      </div>

      {/* Profile Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6 font-britannic">
                Dr. Pranjal D. Sharma
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed font-futura">
                Agnni Predictions is founded by Dr. Pranjal D. Sharma, a
                certified Tarot & Angel Reader, Crystal Healer, and Vastu
                Consultant. With over a decade of experience in spiritual
                sciences, she blends divine intuition with modern understanding
                to help individuals find healing, clarity, and direction.
              </p>
              <p className="text-lg mb-8 opacity-90 leading-relaxed font-futura">
                With deep-rooted belief in connecting with higher energies for
                spiritual growth, Dr. Sharma focuses on holistic well-being of
                mind, body & soul through personal consultations, workshops, and
                mystical products.
              </p>
              <div className="flex gap-16 h-[100px]">
                <div
                  className="flex py-3 gap-x-2 h-full items-center"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <h3 className="text-6xl font-bold text-yellow-400 font-britannic">
                    30+
                  </h3>
                  <p className="text-xl opacity-80 font-futura">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>
                <div
                  className="flex py-3 gap-x-2 items-center"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <h3 className="text-6xl font-bold text-yellow-400 font-britannic">
                    10K+
                  </h3>
                  <p className="text-xl opacity-80 font-futura">
                    Happy
                    <br />
                    Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 p-4 rounded-2xl backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
                  alt="Dr. Pranjal D. Sharma"
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <CrownDecoration />

            <h2 className="text-4xl font-bold mb-4 font-britannic">
              Why Choose Agnni Predictions
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto font-futura">
              "My mission is to uplift human consciousness through divine
              practices."
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {whyMeCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-[300px] bg-purple-600 p-8 rounded-md backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-8xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-britannic">
                  {card.title}
                </h3>
                <p className="text-sm opacity-80 font-futura">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NewsLetter Section */}
      <NewsLetter />

      {/* Footer Section */}
      <FooterMenu />
    </div>
  );
};

export default About;
