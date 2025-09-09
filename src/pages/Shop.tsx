import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CrownDecoration from '../components/CrownDecoration';
import MagicalEffects from '../components/MagicalEffects';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import "/fonts.css";

// Import background assets
import amethystCrystalsBg from "../assets/images/backgrounds/amethyst-crystals.webp";

// Import products data and components
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-divine-900 text-white font-inter overflow-hidden relative">
      {/* Magical Effects Layer */}
      <MagicalEffects page="shop" intensity="medium" enableScrollTrigger={true} />
      
      <Navbar />
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-luxury-900 to-divine-900">
        <div className="absolute inset-0 opacity-15">
          <img src={amethystCrystalsBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h1 className="text-5xl md:text-7xl font-bold font-cinzel text-luxury-300 mt-4">
            The Sacred Shop
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6">
            Discover our curated collection of spiritual products, each blessed and energized to support your journey.
          </p>
          
          {/* Cart Button */}
          {getCartCount() > 0 && (
            <div className="mt-8">
              <button
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 px-6 rounded-xl hover:shadow-gold-lg transition-all duration-300 interactive transform hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>View Cart ({getCartCount()})</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <Footer />
    </div>
  );
};


export default Shop;