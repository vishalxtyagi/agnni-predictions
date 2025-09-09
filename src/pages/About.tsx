import React, { useEffect } from "react";
import background from "../assets/images/backgrounds/purple-gradient.webp";
import { Trophy, Phone, MessageCircle, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";
import "/fonts.css";

// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const About = () => {
  const whyChooseUs = [
    {
      icon: <Trophy className="w-14 h-14 text-purple-300" />,
      title: "Divine Guidance with Depth",
      description:
        "Blending ancient wisdom with modern challenges for authentic spiritual solutions",
    },
    {
      icon: <Phone className="w-14 h-14 text-purple-300" />,
      title: "Trusted Experience",
      description: "3 decades of consultations, 2 PhDs, and global clientele including celebrities",
    },
    {
      icon: <MessageCircle className="w-14 h-14 text-purple-300" />,
      title: "Holistic Solutions",
      description: "From Tarot to Tantra, Angel Healing to Vastu - complete spiritual transformation",
    },
    {
      icon: <Lock className="w-14 h-14 text-purple-300" />,
      title: "Mantra-Infused Products",
      description: "Limited-edition Black Salt, Dhoop, and crystals blessed with sacred chants",
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
                Dr. Pranjal D. Shharma
              </h2>
              <p className="text-lg mb-6 opacity-90 leading-relaxed font-futura">
                Agnni Predictions, founded by Dr. Pranjal D. Shharma, is a holistic spiritual destination dedicated to guiding individuals towards clarity, healing, and transformation. With over 30 years of experience in astrology, numerology, tarot, Vastu Shastra, tantra, and energy healing, Dr. Shharma has helped more than 10,000 people worldwide, including prominent names from Bollywood and Indian television.
              </p>
              <p className="text-lg mb-6 opacity-90 leading-relaxed font-futura">
                At Agnni Predictions, we believe that spirituality is not just about rituals—it is about empowerment and balance. Every service, whether it is Tarot Reading, Kundli Analysis, Numerology, Angel Healing, Crystal Therapy, Vastu Consultation, or Black Magic Removal, is designed to bring harmony to your mind, body, spirit, and surroundings.
              </p>
              <div className="bg-purple-600/30 p-6 rounded-lg mb-6 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold mb-3 text-purple-200 font-britannic">✨ Our Mission</h3>
                <p className="text-base opacity-90 font-futura">
                  To uplift and empower humanity by offering authentic spiritual guidance, healing practices, and cosmic wisdom that help individuals navigate life's challenges with confidence and positivity.
                </p>
              </div>
              <div className="bg-pink-600/30 p-6 rounded-lg mb-8 border-l-4 border-pink-400">
                <h3 className="text-xl font-bold mb-3 text-pink-200 font-britannic">🌿 Our Vision</h3>
                <p className="text-base opacity-90 font-futura">
                  Dr. Shharma envisions a spiritually awakened world where individuals live in alignment with universal energies. Soon, Agnni Predictions will launch a Gurukul, a spiritual school dedicated to nurturing the next generation of healers and spiritual leaders.
                </p>
              </div>
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
            <p className="text-lg opacity-80 max-w-4xl mx-auto font-futura">
              "My mission is to uplift human consciousness through divine practices." – Dr. Pranjal D. Shharma
            </p>
            <p className="text-base opacity-70 max-w-4xl mx-auto font-futura mt-4">
              At Agnni Predictions, every consultation, healing, and remedy is rooted in authenticity, compassion, and decades of spiritual mastery. When you choose Agnni Predictions, you choose a path of light, healing, and empowerment guided by divine practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-[320px] bg-gradient-to-br from-purple-600/30 to-pink-600/30 p-8 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-6xl mb-6">{card.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-center font-britannic">
                  {card.title}
                </h3>
                <p className="text-sm opacity-80 font-futura text-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <FooterMenu />
    </div>
  );
};

export default About;
