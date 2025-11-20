import React from 'react';
import { Link } from 'react-router-dom';

export const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sage-800 font-bold tracking-widest uppercase text-xs mb-4 block">
              Our Purpose
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              Faith in Every Element.
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Worn Within isn't confined to the coastline. It was born from a reverence for all of creation—from the silence of a snow-covered treeline to the rhythm of a concrete bowl or the roar of the ocean.
              </p>
              <p>
                We believe worship happens in movement. Whether you're carving fresh powder on the mountain, dropping into a half-pipe, or waiting for the next set, our apparel is designed to endure the journey.
              </p>
              <p>
                Built for the skate park, the slopes, and the sea, every garment carries a quiet, durable reminder of the Word. We create goods that help you wear your faith outward, wherever the wild leads you.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/mission" className="text-stone-900 font-medium underline underline-offset-8 hover:text-sage-800 transition-colors">
                Read our full story
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] w-full bg-stone-300 relative overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80" 
                alt="Misty coastal mountains" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
              />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute top-8 -right-8 w-full h-full border-2 border-sage-800/20 -z-10 hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};