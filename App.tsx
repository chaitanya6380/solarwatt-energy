import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';

// Service Pages
import ResidentialSolar from './pages/ResidentialSolar';
import CommercialSolutions from './pages/CommercialSolutions';
import IndustrialProjects from './pages/IndustrialProjects';
import MaintenanceAmc from './pages/MaintenanceAmc';
import ShadowAnalysis from './pages/ShadowAnalysis';

import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from './constants';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
    <a 
      href={`https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}`} 
      target="_blank" 
      rel="noreferrer"
      className="bg-green-500 text-white p-3 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
    <a 
      href={`tel:${PHONE_NUMBER}`} 
      className="bg-primary text-white p-3 rounded-full shadow-lg shadow-orange-500/30 hover:scale-110 transition-transform"
      aria-label="Call Now"
    >
      <Phone size={24} />
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-dark bg-white">
        <Header />
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Services Index */}
            <Route path="/services" element={<Services />} />
            
            {/* Explicit Service Routes */}
            <Route path="/services/residential-solar" element={<ResidentialSolar />} />
            <Route path="/services/commercial-solutions" element={<CommercialSolutions />} />
            <Route path="/services/industrial-projects" element={<IndustrialProjects />} />
            <Route path="/services/maintenance-amc" element={<MaintenanceAmc />} />
            <Route path="/services/shadow-analysis" element={<ShadowAnalysis />} />
            
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;