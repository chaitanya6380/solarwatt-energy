import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-light min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-dark mb-4">Our Premium Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
             End-to-end solar solutions tailored to your specific energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {SERVICES.map((service, idx) => (
             <Link 
               to={`/services/${service.slug}`} 
               key={idx} 
               className="bg-white p-10 rounded-3xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col items-start group relative overflow-hidden"
             >
                <div className="w-16 h-16 bg-blue-50 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                   <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 flex-grow">
                   {service.description}
                </p>
                <div className="flex items-center gap-2 font-bold text-secondary group-hover:text-primary transition-colors mt-auto">
                   <span>Learn More</span>
                   <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Services;