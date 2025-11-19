import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-serif text-2xl text-stone-100 mb-6">WORN WITHIN</h4>
            <p className="text-sm leading-relaxed mb-6">
              Faith-based apparel for the modern coastal dweller. Designed with purpose, worn with conviction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-stone-100 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-stone-100 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-stone-100 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h5 className="text-stone-100 font-medium mb-6 tracking-wider uppercase text-xs">Shop</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-stone-100 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Men's</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Women's</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h5 className="text-stone-100 font-medium mb-6 tracking-wider uppercase text-xs">Company</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-stone-100 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Statement of Faith</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h5 className="text-stone-100 font-medium mb-6 tracking-wider uppercase text-xs">Stay Connected</h5>
             <p className="text-xs mb-4">Join the list for early access to drops and devotionals.</p>
             <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-stone-800 border-none text-stone-100 placeholder-stone-500 px-4 py-3 text-sm focus:ring-1 focus:ring-stone-500"
               />
               <button className="bg-stone-100 text-stone-900 px-4 py-3 text-sm font-medium hover:bg-stone-200 transition-colors">
                 Subscribe
               </button>
             </form>
          </div>

        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Worn Within. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-100">Privacy Policy</a>
            <a href="#" className="hover:text-stone-100">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};