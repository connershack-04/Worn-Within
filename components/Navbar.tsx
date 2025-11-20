import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 py-4' : 'bg-stone-50 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-800 hover:text-sage-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center md:justify-start justify-center w-full md:w-auto absolute md:relative left-0 md:left-auto">
            <Link to="/" className="font-serif text-2xl tracking-wider text-stone-900 font-bold">
              WORN WITHIN
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label}
                to={item.href} 
                className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                  location.pathname === item.href ? 'text-sage-800' : 'text-stone-600 hover:text-sage-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center justify-end">
            <button 
              className="text-stone-800 hover:text-sage-800 transition-colors flex items-center gap-2"
              onClick={() => alert("Cart functionality coming soon!")}
            >
              <span className="hidden sm:block text-sm font-medium">Cart</span>
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="ml-1 text-xs bg-sage-800 text-stone-50 rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label}
                to={item.href} 
                className="text-lg font-medium text-stone-800 hover:text-sage-800"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};