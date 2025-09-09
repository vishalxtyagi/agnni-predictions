import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    // Placeholder for checkout functionality
    alert('Checkout functionality will be implemented here');
  };

  const handleIndividualBuy = (itemId: number) => {
    // Placeholder for individual item purchase
    alert(`Buy individual item functionality for item ${itemId} will be implemented here`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[75] flex justify-end"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={onClose} 
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
            className="relative w-full max-w-lg bg-gradient-to-br from-luxury-900 to-divine-900 shadow-divine-xl border-l border-luxury-500/30"
            style={{ height: '100vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-luxury-500/30">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-gold-400" />
                <h2 className="text-2xl font-bold font-cinzel text-luxury-300">Sacred Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 interactive"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 240px)' }}>
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/60 text-lg">Your sacred cart is empty</p>
                  <p className="text-white/40 mt-2">Add some mystical items to begin your journey</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gradient-to-r from-luxury-800/50 to-divine-800/50 rounded-xl p-4 border border-luxury-500/20"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-sm line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gold-400 font-bold mt-1">₹{item.price}</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full bg-luxury-700 hover:bg-luxury-600 flex items-center justify-center transition-colors interactive"
                              >
                                <Minus className="w-4 h-4 text-white" />
                              </button>
                              <span className="text-white font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-luxury-700 hover:bg-luxury-600 flex items-center justify-center transition-colors interactive"
                              >
                                <Plus className="w-4 h-4 text-white" />
                              </button>
                            </div>
                            
                            {/* Individual Actions */}
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleIndividualBuy(item.id)}
                                className="px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-xs font-bold rounded-lg hover:shadow-gold transition-all interactive"
                              >
                                Buy Now
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="w-8 h-8 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-colors interactive"
                              >
                                <Trash2 className="w-4 h-4 text-red-400" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-luxury-500/30 bg-gradient-to-r from-divine-900/80 to-luxury-900/80 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/80 text-lg">Total:</span>
                  <span className="text-gold-300 font-bold text-2xl font-cinzel">
                    ₹{getCartTotal()}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 rounded-xl text-lg hover:shadow-gold-lg transition-all duration-300 interactive transform hover:scale-105"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full border border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold py-2 rounded-xl transition-all duration-300 interactive"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;