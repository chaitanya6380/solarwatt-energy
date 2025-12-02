import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About SolarWatt Energy</h1>
           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
             Driven by a mission to make renewable energy accessible, affordable, and reliable for every household.
           </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
         <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2">
               <img src="https://picsum.photos/600/400" alt="Team at work" className="rounded-3xl shadow-soft w-full" />
            </div>
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 SolarWatt Energy was founded with a simple belief: the sun belongs to everyone. We identified a gap in the market for high-quality, engineered solar solutions that don't cut corners. 
               </p>
               <p className="text-gray-600 text-lg leading-relaxed">
                 Today, we are one of the fastest-growing solar companies, known for our obsessive attention to engineering detail and our unique Power Performance Guarantee.
               </p>
            </div>
         </div>

         {/* Mission/Vision Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-light rounded-2xl border border-gray-100">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Target size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3">Our Mission</h3>
               <p className="text-gray-600">To accelerate the world's transition to sustainable energy through superior technology and customer service.</p>
            </div>
            <div className="p-8 bg-light rounded-2xl border border-gray-100">
               <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <Eye size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3">Our Vision</h3>
               <p className="text-gray-600">To be the most trusted energy partner for homes and businesses globally.</p>
            </div>
            <div className="p-8 bg-light rounded-2xl border border-gray-100">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Award size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3">Our Values</h3>
               <p className="text-gray-600">Integrity in pricing, excellence in engineering, and transparency in performance.</p>
            </div>
         </div>
         
         <div className="text-center">
            <Link to="/contact">
               <Button>Join Our Journey</Button>
            </Link>
         </div>
      </div>
    </div>
  );
};

export default About;