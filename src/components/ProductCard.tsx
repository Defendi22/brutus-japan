import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-orange-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <p className="text-[10px] font-bold text-amber-700 uppercase tracking-tighter">{product.category}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{product.name}</h3>
            <p className="text-sm text-gray-400 font-medium">{product.japaneseName}</p>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 line-clamp-2 mb-4 h-8">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-black text-gray-900">¥{product.price}</span>
            <span className="text-xs text-gray-400 font-medium">/{product.unit}</span>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-amber-900 hover:bg-amber-800 text-white p-3 rounded-xl transition-colors shadow-lg shadow-amber-100 group-hover:scale-110"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
