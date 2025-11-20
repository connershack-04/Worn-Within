import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    alert(`Added ${product.name} to cart.`);
  };

  return (
    <div className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick Add Overlay - Always visible on Mobile, Slide up on Desktop */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-stone-50/95 backdrop-blur text-stone-900 py-3 px-4 flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-stone-50 active:scale-95 transition-all uppercase text-xs tracking-widest font-medium shadow-sm"
          >
            <Plus size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-stone-900 group-hover:underline decoration-stone-400 underline-offset-4">
          {product.name}
        </h3>
        <div className="flex justify-between items-baseline mt-1">
          <span className="text-stone-600 font-light">${product.price}</span>
        </div>
        <span className="mt-2 text-xs text-stone-400 italic font-serif">
          Ref: {product.verse}
        </span>
      </div>
    </div>
  );
};