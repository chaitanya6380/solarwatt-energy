import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME, PHONE_NUMBER } from '../../constants';
import Button from '../ui/Button';

const Header: React.FC = () => {
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-primary to-orange-400 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
             <Sun size={28} fill="white" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-secondary tracking-tight">
            {BRAND_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-base font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
            <Phone size={18} />
            {PHONE_NUMBER}
          </a>
          <Link to="/contact">
            <Button variant="primary" size="sm">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg p-4 flex flex-col gap-4 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-lg font-medium p-2 rounded-md ${
                  isActive ? 'bg-orange-50 text-primary' : 'text-gray-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 text-secondary font-bold p-2">
            <Phone size={18} />
            {PHONE_NUMBER}
          </a>
          <Link to="/contact" className="w-full">
            <Button className="w-full">Get a Quote</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;