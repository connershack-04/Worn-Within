import React from 'react';

const STORIES = [
  {
    id: 1,
    title: "Morning Patrol: Finding Stillness in the Swell",
    excerpt: "Before the world wakes up, there is a quiet on the water that speaks louder than any sermon. Join us for a session at dawn.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
    date: "October 12, 2023",
    category: "Surf"
  },
  {
    id: 2,
    title: "The Theology of the Ascent",
    excerpt: "Climbing isn't just physical. It's a lesson in trust, endurance, and the view from the top that reminds us how small we are.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    date: "September 28, 2023",
    category: "Mountain"
  }
];

export const Stories: React.FC = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6">Journal & Stories</h1>
        <p className="text-stone-600 max-w-2xl text-lg">
          Chronicles from the coast, the mountains, and everywhere in between. Exploring how faith meets life in the wild.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {STORIES.map((story) => (
            <article key={story.id} className="flex flex-col group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden bg-stone-200 mb-6">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-stone-500 mb-3">
                <span>{story.category}</span>
                <span>•</span>
                <span>{story.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-sage-800 transition-colors">
                {story.title}
              </h3>
              <p className="text-stone-600 leading-relaxed line-clamp-3">
                {story.excerpt}
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-stone-900 border-b border-transparent group-hover:border-stone-900 transition-all">Read Story</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};