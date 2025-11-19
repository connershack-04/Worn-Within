import React from 'react';

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
              Rooted in the Word, <br />
              Washed in the Sea.
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Worn Within wasn't created in a boardroom; it started on a misty morning waiting for the swell to pick up. We realized that the peace we feel on the water is a direct reflection of the peace found in scripture.
              </p>
              <p>
                We wanted to create apparel that speaks quietly but boldly. No loud graphics, just quality, sustainable fabrics that carry a hidden reminder of who you are and whose you are.
              </p>
              <p>
                Every garment features a discreet reference to a scripture verse—a personal grounding point for your day, whether you're at the office or checking the break.
              </p>
            </div>
            <div className="mt-8">
              <a href="#about" className="text-stone-900 font-medium underline underline-offset-8 hover:text-sage-800 transition-colors">
                Read our full story
              </a>
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