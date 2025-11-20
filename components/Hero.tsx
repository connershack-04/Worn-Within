import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-400">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=2500&q=80"
          alt="California Coastline Big Sur" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability - Adjusted opacity */}
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 border border-stone-100/30 rounded-full text-stone-100 text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-8 backdrop-blur-sm bg-stone-900/20">
          Est. 2024 • California
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-none drop-shadow-xl">
          Faith Worn <br/> Outward.
        </h1>
        <p className="text-lg md:text-xl text-stone-50 leading-relaxed mb-10 font-light max-w-2xl mx-auto drop-shadow-lg">
          Eco-conscious apparel rooted in the Word. <br className="hidden md:block" />
          Built for the coast, designed for the soul.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/shop"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-stone-900 overflow-hidden transition-all duration-300 hover:bg-stone-100 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="font-medium tracking-widest uppercase text-sm">Shop Collection</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};