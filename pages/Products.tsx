import React from 'react';
import { Check, Download, Zap, Shield, Maximize2 } from 'lucide-react';
import Button from '../components/ui/Button';

const Products: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="bg-secondary py-20 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <div className="inline-block bg-primary px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-wider">Flagship Module</div>
                <h1 className="text-5xl font-extrabold mb-6">SWE-545+Wp Series</h1>
                <p className="text-xl text-blue-100 mb-8">
                   High-efficiency monocrystalline PERC modules designed for maximum output and extreme durability.
                </p>
                <Button variant="white-secondary">Download Datasheet <Download size={18} className="ml-2" /></Button>
             </div>
             <div className="md:w-1/2 flex justify-center">
                 <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-black rounded-lg border-4 border-gray-600 shadow-2xl relative">
                    {/* Simulated Panel Grid */}
                    <div className="absolute inset-2 grid grid-cols-6 grid-rows-12 gap-0.5">
                       {[...Array(72)].map((_,i) => <div key={i} className="bg-blue-900/40 rounded-sm"></div>)}
                    </div>
                 </div>
             </div>
          </div>
       </div>

       <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
             <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-50 text-primary rounded-full flex items-center justify-center mb-6">
                   <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">High Efficiency</h3>
                <p className="text-gray-600">Over 21% module efficiency using advanced Mono PERC technology.</p>
             </div>
             <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-50 text-primary rounded-full flex items-center justify-center mb-6">
                   <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Extreme Durability</h3>
                <p className="text-gray-600">Anti-cyclone certified, waterproof (IP68), and PID resistant.</p>
             </div>
             <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-50 text-primary rounded-full flex items-center justify-center mb-6">
                   <Maximize2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Low Light Performance</h3>
                <p className="text-gray-600">Excellent generation even during cloudy days, mornings, and evenings.</p>
             </div>
          </div>

          <div className="max-w-4xl mx-auto bg-light rounded-3xl p-8 md:p-12">
             <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {[
                   ["Peak Power (Pmax)", "545 Wp"],
                   ["Module Efficiency", "21.3%"],
                   ["Cell Type", "Mono PERC"],
                   ["Weight", "28.5 kg"],
                   ["Dimensions", "2279 × 1134 × 35 mm"],
                   ["Junction Box", "IP68, 3 Bypass Diodes"],
                   ["Front Glass", "3.2mm Tempered ARC"],
                   ["Frame", "Anodized Aluminium Alloy"]
                ].map(([key, value], i) => (
                   <div key={i} className="flex justify-between border-b border-gray-200 pb-3">
                      <span className="text-gray-600 font-medium">{key}</span>
                      <span className="text-dark font-bold">{value}</span>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Products;