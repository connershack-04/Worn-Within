import React from 'react';

export const Mission: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen">
      {/* Header Image */}
      <div className="h-[50vh] relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80" 
            alt="Nature landscape" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="font-serif text-5xl md:text-6xl text-white text-center drop-shadow-lg">Our Mission</h1>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-lg prose-stone mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Faith in Every Element</h2>
          
          <p className="lead text-xl text-stone-600 mb-12 text-center leading-relaxed">
            Worn Within operates at the intersection of faith, nature, and culture. We believe that what you wear is a statement, and we choose to state our reliance on the Creator.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-16">
             <div>
               <h3 className="font-serif text-2xl mb-4 text-sage-800">The Elements</h3>
               <p className="text-stone-600">
                 Whether you're checking the surf or heading to the mountains, our gear is designed to handle the elements—and point back to the One who made them.
               </p>
             </div>
             <div>
               <h3 className="font-serif text-2xl mb-4 text-sage-800">The Message</h3>
               <p className="text-stone-600">
                 Subtle by design. We want our clothing to bring glory to the Creator without the noise. We place scripture references on hems, tags, and inner linings—personal reminders kept close to the heart.
               </p>
             </div>
          </div>

          <div className="bg-stone-100 p-8 md:p-12 rounded-lg my-12 border-l-4 border-sage-800">
            <h3 className="font-serif text-2xl mb-4">Stewarding Creation</h3>
            <p className="text-stone-700 mb-0">
              We seek to use only the best products that honor and preserve God's beautiful creation. Taking care of the earth is our way of respecting the Artist behind it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};