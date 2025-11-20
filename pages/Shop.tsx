import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';

export const Shop: React.FC = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="bg-stone-100 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Shop Collection</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Apparel designed for the journey. From the coast to the peaks, wear your faith outward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters could go here */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Duplicating products to simulate a fuller shop for the demo */}
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {PRODUCTS.map((product) => (
            <ProductCard key={`dup-${product.id}`} product={{...product, id: product.id + 10, name: "Vintage " + product.name}} />
          ))}
        </div>
      </div>
    </div>
  );
};