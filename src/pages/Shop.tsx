import React, { useEffect } from "react";
import background from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";
import "/fonts.css";


// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Shop = () => {
  const Shop = [
    {
      title: "Dhoop & Black Salt – Nazar Removal Kit",
      description:
        " Protect your aura and space from evil eye energy. Includes dhoop sticks and blessed black salt.",
      image:
        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Amethyst Bracelet",
      description:
        "Promotes peace & intuition. Enhances spiritual clarity & calmness.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Lapis Lazuli Bracelet",
      description:
        "Encourages truth & wisdom. Boosts self-expression & mental clarity.",
      image:
        "https://images.unsplash.com/photo-1596247865408-c5107e2b950?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Tiger’s Eye Bracelet",
      description: "Shields against negativity. Attracts confidence & courage.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Pyrite Bracelet",
      description:
        "Manifests wealth & abundance. Energizes action & motivation.",
      image:
        "https://images.unsplash.com/photo-1571169766717-0b0d2c7a8080?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Clear Quartz Bracelet",
      description:
        "Master healer & amplifier. Balances energy & enhances focus.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
      price: "₹449",
    },
    {
      title: "Rose Quartz Bracelet",
      description:
        "Opens the heart to love. Heals emotional wounds & fosters compassion.",
      image:
        "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=500&h=300&fit=crop",
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
        <h1 className="text-5xl font-bold mb-4 font-britannic">Our Products</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
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
              Spiritual Store
            </h2>
            <p
              className="text-lg opacity-80 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Custom combinations available. All crystals are 100% authentic,
              cleansed, and energised before dispatch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Shop.map((course, index) => (
              <div
                key={index}
                className="bg-transparent overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-sm"
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
                      className="px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full text-white font-semibold 
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

export default Shop;
