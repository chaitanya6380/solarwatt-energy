import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { BRAND_NAME, ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS, NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-lg">
                <Sun size={24} className="text-primary" fill="#FA762B" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">{BRAND_NAME}</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering homes and businesses with premium, high-efficiency solar solutions. Join the renewable revolution today.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-400/30 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-blue-100 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-blue-100 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-400/30 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-blue-100">Residential Solar</li>
              <li className="text-blue-100">Commercial Solutions</li>
              <li className="text-blue-100">Industrial Projects</li>
              <li className="text-blue-100">Maintenance (AMC)</li>
              <li className="text-blue-100">Shadow Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-400/30 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100">
                <MapPin className="shrink-0 text-primary mt-1" size={18} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Phone className="shrink-0 text-primary" size={18} />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Mail className="shrink-0 text-primary" size={18} />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;