import React, { useEffect } from "react";
import background from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";

// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Consultation = () => {
  const Consultation = [
    {
      title: "Tarot Card Reading",
      description:
        "Decode energies of your past, present & future. Insights for love, career, health & personal growth.",
      image: "src/assets/images/2.webp",
      price: "₹449",
    },
    {
      title: "Angel Reading",
      description:
        "Receive divine messages & angelic guidance to realign your life purpose and inner peace.",
      image: "src/assets/images/service2.webp",
      price: "₹449",
    },
    {
      title: "Crystal Healing Session",
      description:
        "Rebalance chakras & cleanse your aura with intuitively chosen crystals for your energy field.",
      image: "src/assets/images/service3.webp",
      price: "₹449",
    },
    {
      title: "Vastu Consultation",
      description:
        "Harmonize your space with simple yet powerful Vastu remedies & energy corrections.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Numerology Report",
      description:
        "Discover your life path, personality & destiny numbers. Gain clarity on names, career & relationships.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Astrological Predictions",
      description:
        "Personalized insights from your birth chart for career, marriage, finances & health.",
      image:
        "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Signature Analysis",
      description:
        "Uncover subconscious patterns in your handwriting & receive transformative suggestions.",
      image:
        "https://images.unsplash.com/photo-1518384401463-d3876163c195?w=500&h=300&fit=crop",
      price: "₹449",
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
        <h1 className="text-5xl font-bold mb-4 font-britannic">Consultation</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Get a Tarot Reading done to understand the Depth of the Situation and
          Resolve it
        </p>
      </div>

      {/* Consultation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <CrownDecoration />
            <h2 className="text-4xl font-bold mb-4 font-britannic">
              Our Consultation
            </h2>
            <p
              className="text-lg opacity-80 max-w-3xl mx-auto font-futura"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              All services are available online and offline (Mumbai-based).
              Sessions are personalized, intuitive, and spiritually guided.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Consultation.map((service, index) => (
              <div
                key={index}
                className="font-futura bg-gradient-to-br from-purple-600/30 to-pink-600/30  overflow-hidden backdrop-blur-sm 
                          hover:from-yellow-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100} // Stagger in groups of 4
              >
                <div
                  className="aspect-square overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={(index % 4) * 100 + 200}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm opacity-80 mb-4">
                    {service.description}
                  </p>
                  <button
                    className="text-sm font-semibold hover:text-yellow-400 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 100 + 300}
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />
      <FooterMenu />
    </div>
  );
};

export default Consultation;
