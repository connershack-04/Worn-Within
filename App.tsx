import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { MissionSection } from './components/MissionSection';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-sage-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Products Grid */}
        <section id="shop" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Latest Arrivals</h2>
            <a href="#" className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors pb-1">
              View All Products
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <a href="#" className="inline-block text-sm font-medium text-stone-900 border border-stone-300 px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors">
              View All Products
            </a>
          </div>
        </section>

        <MissionSection />
        
        {/* Quote Section */}
        <section className="py-32 px-4 text-center bg-sage-800 text-stone-100">
          <div className="max-w-3xl mx-auto">
             <p className="font-serif text-2xl md:text-4xl italic leading-relaxed opacity-90">
              "Deep calls to deep at the roar of your waterfalls; all your breakers and your waves have gone over me."
             </p>
             <p className="mt-6 text-sm font-medium tracking-widest uppercase opacity-70">— Psalm 42:7</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;