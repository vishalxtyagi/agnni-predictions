import React from 'react';
import { ShoppingCart, Heart, Eye, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category
    });
  };

  const handleBuyNow = () => {
    if (!isInCart(product.id)) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category
      });
    }
    // Placeholder for direct checkout
    alert(`Direct checkout for ${product.title} will be implemented here`);
  };

  return (
    <div className="group bg-gradient-to-br from-luxury-900/50 to-divine-900/50 rounded-3xl border border-luxury-500/30 overflow-hidden backdrop-blur-md hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onQuickView?.(product)}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 interactive"
            title="Quick View"
          >
            <Eye className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 interactive">
            <Heart className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-luxury-700/80 backdrop-blur-md text-white text-xs px-2 py-1 rounded-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-cinzel text-luxury-300 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gold-400 font-cinzel">
            ₹{product.price}
          </div>
          {isInCart(product.id) && (
            <div className="flex items-center space-x-1 text-green-400 text-sm">
              <Zap className="w-4 h-4" />
              <span>In Cart</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-luxury-700 hover:bg-luxury-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 interactive"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{isInCart(product.id) ? 'Add More' : 'Add to Cart'}</span>
          </button>
          
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-gold interactive transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;