import React, { useEffect } from "react";
import background from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";
import FooterMenu from "../components/FooterMenu";
import NewsLetter from "../components/NewsLetter";
import CrownDecoration from "../components/CrownDecoration";
import "/fonts.css";

// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Guidance = () => {
  const services = [
    {
      title: "TAROT CARD READING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&h=300&fit=crop",
    },
    {
      title: "ANGEL READING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    },
    {
      title: "CRYSTAL HEALING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1596247865408-cb5107e2b950?w=300&h=300&fit=crop",
    },
    {
      title: "NUMEROLOGY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    },
    {
      title: "RUNES READING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1571169766717-0b0d2c7a8080?w=300&h=300&fit=crop",
    },
    {
      title: "VASTU CONSULTANCY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop",
    },
    {
      title: "VEDIC ASTROLOGY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=300&h=300&fit=crop",
    },
    {
      title: "GEMMOLOGY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1583937443351-f97a79a8686c?w=300&h=300&fit=crop",
    },
    {
      title: "HOROSCOPE READING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus erit.",
      image:
        "https://images.unsplash.com/photo-1515942661900-94b3d1972591?w=300&h=300&fit=crop",
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
        <h1 className="text-5xl font-bold mb-4">Consultation</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Get a Tarot Reading done to understand the Depth of the Situation and
          Resolve it
        </p>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
           
            <CrownDecoration className="w-12 h-8 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Our Guidance
            </h2>
            <p
              className="text-lg opacity-80 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ut risus et lacus pretium aliquam. Nullam elementum luctus erat,
              at scelerisque nulla aliquam ut. Nunc rhoncus turpis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-md overflow-hidden backdrop-blur-sm 
                          hover:from-yellow-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100} // Stagger in groups of 3
              >
                <div
                  className="aspect-square overflow-hidden p-2 bg-white"
                  data-aos="zoom-in"
                  data-aos-delay={(index % 3) * 100 + 200}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white text-black">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm opacity-80 mb-4">
                    {service.description}
                  </p>
                  <button
                    className="bg-gradient-to-r from-orange-400 to-orange-800 px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100 + 300}
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
      {/* Footer Menu */}
      <FooterMenu />
    </div>
  );
};

export default Guidance;
