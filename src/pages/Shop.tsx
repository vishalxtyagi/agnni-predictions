import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CrownDecoration from '../components/CrownDecoration';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import "/fonts.css";

// Import product images
import BlackSalt from "../assets/images/crystals/black-salt.webp";
import AmethystBracelet from "../assets/images/crystals/amethyst-bracelet.webp";
import LapisLazuli from "../assets/images/crystals/lapis-lazuli.webp";
import TigerEye from "../assets/images/crystals/tiger-eye-stone.webp";
import Pyrite from "../assets/images/crystals/pyrite.webp";
import Carnelian from "../assets/images/crystals/carnelian.webp";

const products = [
  { id: 1, title: "Black Salt for Nazar Removal", description: "Protect your space from negativity with our specially prepared Black Salt, chanted with sacred mantras over 1 lakh times.", image: BlackSalt, price: 799, featured: true },
  { id: 2, title: "Amethyst Crystal Bracelet", description: "Enhances spiritual clarity, promotes calmness, and deepens your meditation practice for profound peace.", image: AmethystBracelet, price: 1299 },
  { id: 3, title: "Lapis Lazuli Bracelet", description: "Boosts self-expression, mental clarity, and authentic communication, connecting you to your inner wisdom.", image: LapisLazuli, price: 1299 },
  { id: 4, title: "Tiger's Eye Bracelet", description: "A powerful stone of protection and confidence, it shields against negativity while attracting courage.", image: TigerEye, price: 1299 },
  { id: 5, title: "Pyrite Crystal Bracelet", description: "Known as a stone of wealth and manifestation, Pyrite energizes action and attracts abundance.", image: Pyrite, price: 1299 },
  { id: 6, title: "Carnelian Bracelet", description: "Ignites creativity, courage, and motivation, opening the heart to love and healing emotional wounds.", image: Carnelian, price: 1299 },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  return (
    <div className="bg-divine-900 text-white font-inter overflow-hidden">
      <Navbar />
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-luxury-900 to-divine-900">
        <div className="absolute inset-0 opacity-10">
          <img src="/src/assets/images/backgrounds/amethyst-crystals.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h1 className="text-5xl md:text-7xl font-bold font-cinzel text-luxury-300 mt-4">
            The Sacred Shop
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6">
            Discover our curated collection of spiritual products, each blessed and energized to support your journey.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      <SacredCart cart={cart} setCart={setCart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <Footer />
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }) => (
  <div className="group bg-gradient-to-br from-luxury-900/50 to-divine-900/50 rounded-3xl border border-luxury-500/30 overflow-hidden backdrop-blur-md hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
    {product.featured && <div className="bg-gold-500 text-black text-center py-1.5 font-bold text-sm font-cinzel tracking-widest">FEATURED</div>}
    <div className="relative h-64 overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold font-cinzel text-luxury-300 mb-2 flex-grow">{product.title}</h3>
      <p className="text-white/70 font-inter text-sm mb-4 flex-grow">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-2xl font-bold text-gold-400">₹{product.price}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="group/btn flex items-center space-x-2 bg-transparent border-2 border-gold-500 text-gold-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gold-500 hover:text-black hover:shadow-gold-sm"
        >
          <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
);

const SacredCart = ({ cart, setCart, isOpen, onClose }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item).filter(item => item.quantity > 0));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: 'backInOut' }}
            className="relative z-10 w-full max-w-lg bg-gradient-to-br from-luxury-900 to-divine-900 rounded-3xl border border-luxury-500/30 shadow-divine-xl mx-4"
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold font-cinzel text-gold-400">Sacred Cart</h2>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <X className="w-6 h-6 text-white/70" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-white/70 py-10">Your cart is a sacred space awaiting treasures.</p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md object-cover" />
                      <div className="flex-grow px-4">
                        <h4 className="font-bold text-white/90">{item.title}</h4>
                        <p className="text-sm text-gold-400">₹{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 rounded-full bg-white/10"><Minus size={14} /></button>
                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 rounded-full bg-white/10"><Plus size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <div className="border-t border-luxury-500/30 pt-6 space-y-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-white/80">Total</span>
                    <span className="text-gold-300">₹{total}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 rounded-lg text-lg hover:shadow-gold-lg transition-shadow">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Shop;