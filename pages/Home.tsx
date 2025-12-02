import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Zap, 
  ShieldCheck, TrendingUp, Sun, Battery, LayoutGrid, Users, Home as HomeIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import { BENEFITS, ROI_DATA, TRUST_BADGES, FAQS, TESTIMONIALS } from '../constants';

// --- Sub Components ---

const SectionHeading: React.FC<{ 
  title: string; 
  subtitle: string; 
  center?: boolean;
  light?: boolean;
}> = ({ title, subtitle, center = true, light = false }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${light ? 'text-white' : 'text-dark'}`}>
      {title}
    </h2>
    <div className={`h-1.5 w-20 bg-primary rounded-full mb-6 ${center ? 'mx-auto' : ''}`} />
    <p className={`text-lg md:text-xl max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-600'}`}>
      {subtitle}
    </p>
  </div>
);

const Card: React.FC<{ 
  icon: React.ElementType; 
  title: string; 
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 h-full flex flex-col"
  >
    <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
      <Icon size={32} strokeWidth={2} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white">
    <button 
      className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <span className="text-lg font-bold text-dark">{question}</span>
      {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
    </button>
    <div 
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
        {answer}
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-light overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-[200px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-0">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-block px-4 py-2 bg-white rounded-full text-secondary font-bold text-sm shadow-sm mb-6 border border-blue-50">
                🚀 #1 Trusted Solar Partner
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-dark">
                Switch to <span className="text-primary">Solar.</span><br />
                Save <span className="text-secondary">Big.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Cut your electricity bills by up to 90% with SolarWatt Energy's premium modules and expert installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-orange-500/20">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link to="/calculator">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Calculate Savings
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Illustration/Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
               {/* Placeholder for Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-white">
                <img 
                  src="https://picsum.photos/800/600" 
                  alt="Modern Home with Solar Panels" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase">Daily Savings</p>
                            <p className="text-xl font-bold text-dark">₹ 450.00</p>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Badges */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {TRUST_BADGES.map((badge, idx) => (
               <div key={idx} className="flex items-center gap-2 font-semibold text-gray-600">
                 <CheckCircle className="text-green-500" size={20} />
                 {badge}
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 3. Why Solar (Benefits List) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Why Switch to SolarWatt?" 
            subtitle="Join thousands of homeowners powering their future with clean, renewable energy." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <Card 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Savings / ROI Table */}
      <section className="py-20 bg-secondary text-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Calculate Your Savings" 
            subtitle="See how much you can save by switching to solar today." 
            center={true}
            light={true}
          />
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-50 text-secondary">
                    <th className="p-6 font-bold text-lg">System Size</th>
                    <th className="p-6 font-bold text-lg">Annual Generation</th>
                    <th className="p-6 font-bold text-lg">Annual Savings</th>
                    <th className="p-6 font-bold text-lg">25-Year Savings</th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  {ROI_DATA.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold text-primary">{row.systemSize}</td>
                      <td className="p-6">{row.annualGeneration}</td>
                      <td className="p-6 font-bold text-green-600">{row.annualSavings}</td>
                      <td className="p-6 font-bold">{row.lifetimeSavings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-blue-50 text-center flex flex-col items-center gap-4">
                <p className="text-gray-600">Want a custom estimate based on your exact electricity bill?</p>
                <Link to="/calculator">
                  <Button variant="primary">Use Advanced Calculator</Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How Solar Works */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="How Solar Works" 
            subtitle="Understanding the simple journey from sun rays to savings." 
          />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="lg:w-1/2">
                {/* Diagram Replacement */}
                <div className="bg-white p-8 rounded-3xl shadow-soft">
                  <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full text-primary">
                          <Sun size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-dark">1. Panels Absorb Sunlight</h4>
                          <p className="text-gray-600">PV cells convert sunlight into Direct Current (DC) electricity.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-secondary">
                          <Zap size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-dark">2. Inverter Conversion</h4>
                          <p className="text-gray-600">The inverter converts DC into Alternating Current (AC) for home use.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                          <HomeIcon size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-dark">3. Power Your Home</h4>
                          <p className="text-gray-600">Your appliances run on clean solar energy first.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                          <LayoutGrid size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-dark">4. Net Metering</h4>
                          <p className="text-gray-600">Excess energy (e.g., 20 units) is exported to the grid for credit.</p>
                          <div className="mt-3 bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                             <strong>Example:</strong><br/>
                             Generated: 680 Units<br/>
                             Consumed: 660 Units<br/>
                             Exported: <span className="text-green-600 font-bold">20 Units (Credit)</span>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
             <div className="lg:w-1/2 relative">
                <img 
                  src="https://picsum.photos/600/600" 
                  alt="Solar Diagram Visualization" 
                  className="rounded-3xl shadow-xl w-full"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 6. PPG Performance Guarantee */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="bg-dark text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                      PPG Guarantee <span className="text-primary">200%</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                       We don't just promise; we guarantee. If our system generates less than promised, we pay you the difference.
                    </p>
                    <ul className="space-y-4 mb-8">
                       <li className="flex items-center gap-3">
                          <CheckCircle className="text-primary" />
                          <span>Kick Start 45 Days Guarantee</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle className="text-primary" />
                          <span>Free Corrective Maintenance (1st Year)</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle className="text-primary" />
                          <span>Detailed Generation Reports</span>
                       </li>
                    </ul>
                    <Link to="/products">
                       <Button variant="primary">Learn More</Button>
                    </Link>
                 </div>
                 <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                       <div className="text-4xl font-extrabold text-primary mb-2">27</div>
                       <div className="text-sm text-gray-300">Years Performance Warranty</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                       <div className="text-4xl font-extrabold text-primary mb-2">100+</div>
                       <div className="text-sm text-gray-300">Quality Checks</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                       <div className="text-4xl font-extrabold text-primary mb-2">12</div>
                       <div className="text-sm text-gray-300">Years Product Warranty</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                       <div className="text-4xl font-extrabold text-primary mb-2">21%</div>
                       <div className="text-sm text-gray-300">Module Efficiency</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
           <SectionHeading title="Customer Stories" subtitle="Hear from homeowners who made the switch." />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex text-yellow-400 mb-4">
                       {[...Array(t.rating)].map((_, i) => <Sun key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                          {t.name[0]}
                       </div>
                       <div>
                          <p className="font-bold text-dark">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.role}, {t.location}</p>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

       {/* 8. Process Timeline */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <SectionHeading title="Simple 4-Step Process" subtitle="From consultation to generation in no time." center={true} />
           
           <div className="relative max-w-4xl mx-auto">
              {/* Line */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2"></div>
              
              {[
                { title: "Discovery & Quote", desc: "Site survey and customized proposal." },
                { title: "Design & Engineering", desc: "3D structure design and shadow analysis." },
                { title: "Installation", desc: "Expert mounting and electrical setup in 1-2 days." },
                { title: "Support & Maintenance", desc: "Net metering liaison and lifetime support." }
              ].map((step, idx) => (
                 <div key={idx} className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10">
                       {idx + 1}
                    </div>
                    <div className="w-full md:w-1/2 pl-16 md:pl-12 md:pr-12">
                        <div className={`bg-white p-6 rounded-xl border border-gray-100 shadow-soft ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                           <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                           <p className="text-gray-600">{step.desc}</p>
                        </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-light">
         <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeading title="Frequently Asked Questions" subtitle="Got questions? We have answers." center={true} />
            <div className="space-y-4">
               {FAQS.map((faq, idx) => (
                  <AccordionItem 
                     key={idx}
                     question={faq.question}
                     answer={faq.answer}
                     isOpen={openFaqIndex === idx}
                     onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  />
               ))}
            </div>
         </div>
      </section>

      {/* 10. CTA Footer */}
      <section className="py-20 bg-primary text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to go solar?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
               Get a free customized solar rooftop design and quote today.
            </p>
            <Link to="/contact">
               <Button variant="white" size="lg">
                  Request Callback
               </Button>
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;