import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, DollarSign, ArrowRight, Info, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Calculator: React.FC = () => {
  const [bill, setBill] = useState<number>(3000);
  const [pincode, setPincode] = useState<string>("");
  const [results, setResults] = useState({
    systemSize: 0,
    roofArea: 0,
    monthlySavings: 0,
    yearlySavings: 0,
    totalCost: 0,
    subsidy: 0,
    netCost: 0
  });

  // Calculation Constants
  const UNIT_RATE = 8; // Avg cost per unit
  const UNITS_PER_KW = 120; // Monthly generation per kW
  const SQFT_PER_KW = 60; // Roof area required per kW
  const COST_PER_KW = 65000; // Base market price

  useEffect(() => {
    calculateSolar();
  }, [bill]);

  const calculateSolar = () => {
    // 1. Calculate required units
    const unitsConsumed = bill / UNIT_RATE;

    // 2. System Size (kW) required to offset bill
    // Round to nearest 0.5 or 1 decimal for realism
    let size = unitsConsumed / UNITS_PER_KW;
    size = Math.max(1, parseFloat(size.toFixed(2))); // Min 1kW

    // 3. Roof Area
    const area = Math.ceil(size * SQFT_PER_KW);

    // 4. Savings
    // Assume 90% bill offset
    const mSavings = Math.floor(bill * 0.95);
    const ySavings = mSavings * 12;

    // 5. Investment & Subsidy (Approximation based on PM Surya Ghar)
    // 1kW: 30k subsidy
    // 2kW: 60k subsidy
    // 3kW+: 78k subsidy
    
    const total = Math.floor(size * COST_PER_KW);
    
    let sub = 0;
    if (size <= 2) {
        sub = size * 30000;
    } else if (size <= 3) {
        sub = 60000 + ((size - 2) * 18000);
    } else {
        sub = 78000;
    }
    
    // Cap subsidy at total cost (unlikely but safe)
    sub = Math.min(sub, total * 0.6); 

    setResults({
      systemSize: size,
      roofArea: area,
      monthlySavings: mSavings,
      yearlySavings: ySavings,
      totalCost: total,
      subsidy: Math.floor(sub),
      netCost: total - Math.floor(sub)
    });
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-light min-h-screen py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-dark mb-4">Calculate Your Solar Savings Now!</h1>
            <p className="text-gray-600 text-lg">Unlock savings, build that dream fund, and start ticking off your checklist.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            
            {/* LEFT COLUMN: INPUTS */}
            <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-3xl shadow-soft h-full">
                    {/* Pincode */}
                    <div className="mb-10">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Pin code</label>
                        <input 
                            type="text" 
                            placeholder="e.g. 400001 (Mumbai)"
                            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 font-medium"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                        />
                    </div>

                    {/* Bill Slider */}
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                                Avg electricity bill <Info size={14} className="text-gray-400" />
                            </label>
                        </div>
                        
                        <div className="relative mb-6">
                            <input 
                                type="range" 
                                min="500" 
                                max="25000" 
                                step="100"
                                value={bill}
                                onChange={handleBillChange}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>Min. ₹500</span>
                                <span>Max. ₹25,000</span>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-secondary text-white font-bold text-xl px-6 py-3 rounded-xl inline-block shadow-lg shadow-blue-500/20">
                                ₹ {bill}
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicator */}
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-dark mb-2 text-center">Take control of your electricity bill with SolarWatt</h4>
                        <p className="text-center text-sm text-gray-600 mb-4">India's premium solar engineering partner</p>
                        <div className="flex justify-center text-yellow-500 gap-1 mb-2">
                            {[1,2,3,4,5].map(i => <Sun key={i} size={20} fill="currentColor" />)}
                        </div>
                        <p className="text-center text-xs text-gray-500 font-medium">4.8/5 Rating • 5000+ Installations</p>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: RESULTS */}
            <div className="lg:w-1/2 space-y-6">
                
                {/* 1. Required System Size */}
                <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100">
                    <h3 className="font-bold text-lg text-dark mb-4">Required System Size</h3>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 bg-gray-50 p-4 rounded-2xl text-center">
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase font-bold mb-1">
                                <Battery size={14} /> System Size
                            </div>
                            <div className="text-2xl font-extrabold text-secondary">{results.systemSize} kW</div>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div className="flex-1 bg-gray-50 p-4 rounded-2xl text-center">
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase font-bold mb-1">
                                <Sun size={14} /> Roof Area
                            </div>
                            <div className="text-2xl font-extrabold text-dark">{results.roofArea} sq. ft.</div>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500">
                            Do not have required roof area? <Link to="/contact" className="text-secondary underline">Get in touch</Link>
                        </p>
                    </div>
                </div>

                {/* 2. Your Solar Savings */}
                <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100">
                    <h3 className="font-bold text-lg text-dark mb-4">Your Solar Savings</h3>
                    <div className="flex items-center justify-between gap-4 mb-6">
                         <div className="text-center flex-1">
                             <p className="text-xs text-gray-500 font-bold mb-1">Monthly</p>
                             <p className="text-2xl font-extrabold text-dark">{formatCurrency(results.monthlySavings)}</p>
                         </div>
                         <div className="w-px h-10 bg-gray-200"></div>
                         <div className="text-center flex-1">
                             <p className="text-xs text-gray-500 font-bold mb-1">Yearly</p>
                             <p className="text-2xl font-extrabold text-dark">{formatCurrency(results.yearlySavings)}</p>
                         </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                         <p className="text-sm text-secondary font-medium flex items-center justify-center gap-2">
                             <CheckCircle size={16} /> We offer 25-year performance guarantee
                         </p>
                    </div>
                </div>

                {/* 3. Your Investment */}
                <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100">
                    <h3 className="font-bold text-lg text-dark mb-4">Your Investment</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Total cost of plant</span>
                            <span className="font-bold text-dark">{formatCurrency(results.totalCost)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-green-600 font-medium">Govt. Subsidy (Est.)</span>
                            <span className="font-bold text-green-600">-{formatCurrency(results.subsidy)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 pt-3">
                            <span className="text-dark font-extrabold text-lg">Net Cost</span>
                            <span className="font-extrabold text-2xl text-dark">{formatCurrency(results.netCost)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Floating Bottom Bar or CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-secondary text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
             <div className="text-center md:text-left">
                 <p className="text-blue-200 text-sm font-bold uppercase tracking-wide mb-1">Expert Consultation</p>
                 <h3 className="text-xl md:text-2xl font-bold">Have questions about the subsidy?</h3>
             </div>
             <Link to="/contact">
                <Button variant="white" className="w-full md:w-auto">
                    Book a Free Consultation <ArrowRight size={18} className="ml-2" />
                </Button>
             </Link>
        </div>

      </div>
    </div>
  );
};

export default Calculator;