import React, { useEffect } from "react";
import background from "../assets/images/backgrounds/purple-gradient.webp";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";
import MagicalEffects from "../components/MagicalEffects";
import ScrollBasedEffects from "../components/ScrollBasedEffects";
import "/fonts.css";
// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Courses = () => {
  const Shop = [
    {
      title: "Tarot Reading Course",
      description:
        "Master the art of tarot interpretation & build a spiritual practice. No prior experience needed.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Angel Healing Certification",
      description:
        "Learn to invoke angelic guidance & become a certified angel healer. Connect with divine energy.",
      image: "src/assets/images/services/angel-reading.webp",
      price: "₹449",
    },
    {
      title: "Crystal Healing Masterclass",
      description:
        "Discover crystal vibrations, placements & healing techniques. Harness their energy for balance.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Vastu Shastra Course",
      description:
        "Learn practical Vastu applications for homes & workplaces. Harmonize your environment.",
      image:
        "https://images.unsplash.com/photo-1571169766717-0b0d2c7a8080?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Meditation & Intuition Activation",
      description:
        "Calm your mind, open your third eye & awaken intuition through guided energy work.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
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
      {/* Magical Effects Layer */}
      <MagicalEffects page="courses" intensity="medium" enableScrollTrigger={true} />
      
      {/* Scroll-Based Interactive Effects */}
      <ScrollBasedEffects className="z-10" />
      
      <Navbar />

      {/* Header Section */}
      <div className="pt-20 pb-10 text-center" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4 font-britannic">Our Courses</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-futura">
          Get a Tarot Reading done to understand the Depth of the Situation and
          Resolve it
        </p>
      </div>

      {/* Shop Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <CrownDecoration />

            <h2 className="text-4xl font-bold mb-4 font-britannic">
              Our Courses
            </h2>
            <p
              className="text-lg opacity-80 max-w-3xl mx-auto font-futura"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Learn to heal yourself and others with these certification-based
              spiritual courses. Each course includes live sessions, material,
              and personalized mentoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Shop.map((course, index) => (
              <div
                key={index}
                className="font-futura bg-transparent overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-sm"
                style={{
                  background: "transparent",
                  border: "2px dotted rgba(255, 255, 255, 0.5)",
                  padding: "2px",
                }}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100} // Stagger in groups of 3
              >
                <div
                  className="h-48 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={(index % 3) * 100 + 200}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {course.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-6 text-white">
                    {course.description}
                  </p>
                  <div
                    className="flex justify-between items-center"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100 + 300}
                  >
                    <span className="text-xl font-bold text-yellow-400">
                      {course.price}
                    </span>
                    <button
                      className="font-futura px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full text-white font-semibold 
                                     hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                      Buy Now
                    </button>
                  </div>
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

export default Courses;
