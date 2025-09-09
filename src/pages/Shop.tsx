import React, { useEffect } from "react";
import background from "../assets/images/backgrounds/purple-gradient.webp";
import BlackSalt from "../assets/images/crystals/black-salt.webp";
import AmethystBracelet from "../assets/images/crystals/amethyst-bracelet.webp";
import LapisLazuli from "../assets/images/crystals/lapis-lazuli.webp";
import TigerEye from "../assets/images/crystals/tiger-eye-stone.webp";
import Pyrite from "../assets/images/crystals/pyrite.webp";
import Aquamarine from "../assets/images/crystals/aquamarine.webp";
import Carnelian from "../assets/images/crystals/carnelian.webp";
import BlueApatite from "../assets/images/crystals/blue-apatite.webp";
import Garnet from "../assets/images/crystals/garnet.webp";
import RedJasper from "../assets/images/crystals/red-jasper.webp";
import Navbar from "../components/Navbar";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";
import "/fonts.css";


// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Shop = () => {
  const products = [
    {
      title: "Black Salt for Nazar Removal",
      description:
        "Protect yourself and your space from negativity with our specially prepared Black Salt. Chanted with sacred mantras over 1 lakh times by Dr. Pranjal D. Sharma, making it highly potent for energy cleansing.",
      image: BlackSalt,
      price: "₹799",
      featured: true
    },
    {
      title: "Amethyst Crystal Bracelet",
      description:
        "Peace & Intuition – Enhances spiritual clarity, promotes calmness and deepens meditation practice.",
      image: AmethystBracelet,
      price: "₹1299",
    },
    {
      title: "Lapis Lazuli Bracelet",
      description:
        "Truth & Wisdom – Boosts self-expression, mental clarity and authentic communication.",
      image: LapisLazuli,
      price: "₹1299",
    },
    {
      title: "Tiger's Eye Bracelet",
      description: 
        "Protection & Confidence – Shields against negativity while attracting courage and personal power.",
      image: TigerEye,
      price: "₹1299",
    },
    {
      title: "Pyrite Crystal Bracelet",
      description:
        "Wealth & Manifestation – Energizes action, motivation and attracts abundance into your life.",
      image: Pyrite,
      price: "₹1299",
    },
    {
      title: "Aquamarine Bracelet",
      description:
        "Clear Communication – Master healer and amplifier that balances energy and enhances focus.",
      image: Aquamarine,
      price: "₹1299",
    },
    {
      title: "Carnelian Bracelet",
      description:
        "Creativity & Courage – Opens the heart to love, heals emotional wounds and fosters compassion.",
      image: Carnelian,
      price: "₹1299",
    },
    {
      title: "Blue Apatite Bracelet", 
      description:
        "Motivation & Learning – Stimulates intellect and enhances learning abilities.",
      image: BlueApatite,
      price: "₹1299",
    },
    {
      title: "Garnet Bracelet",
      description:
        "Passion & Energy – Revitalizes body and mind, brings passion and strength.",
      image: Garnet,
      price: "₹1299",
    },
    {
      title: "Red Jasper Bracelet",
      description:
        "Grounding & Stability – Provides emotional stability and grounding energy.",
      image: RedJasper,
      price: "₹1299",
    }
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
        <h1 className="text-5xl font-bold mb-4 font-britannic">Products/Shop</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-futura">
          Spiritual products blessed with sacred mantras by Dr. Pranjal D. Sharma. Transform your space with divine energy and protection.
        </p>
      </div>

      {/* Shop Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <CrownDecoration />

            <h2 className="text-4xl font-bold mb-4 font-britannic">
              Spiritual Products
            </h2>
            <p
              className="text-lg opacity-80 max-w-3xl mx-auto font-futura"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              All crystals are 100% authentic, cleansed, and energised before dispatch. Custom combinations available for personalized healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 shadow-2xl border ${product.featured ? 'border-yellow-400' : 'border-purple-500/20'} font-futura`}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100} // Stagger in groups of 3
              >
                {product.featured && (
                  <div className="bg-yellow-400 text-black text-center py-1 font-bold text-sm">
                    FEATURED PRODUCT
                  </div>
                )}
                <div
                  className="h-48 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={(index % 3) * 100 + 200}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {product.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-6 text-white leading-relaxed">
                    {product.description}
                  </p>
                  <div
                    className="flex justify-between items-center"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100 + 300}
                  >
                    <span className="text-xl font-bold text-purple-300">
                      {product.price}
                    </span>
                    <button
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold 
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

      {/* Footer Menu */}
      <FooterMenu />
    </div>
  );
};

export default Shop;
