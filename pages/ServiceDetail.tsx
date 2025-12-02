import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, PHONE_NUMBER } from '../constants';
import Button from '../components/ui/Button';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <Icon size={48} className="text-primary" />
            </div>
            <div>
              <div className="text-blue-200 font-bold tracking-wide uppercase text-sm mb-2">Our Services</div>
              <h1 className="text-4xl md:text-5xl font-extrabold">{service.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-dark mb-6">Overview</h2>
              <p className="leading-relaxed mb-8 text-lg">
                {service.longDescription}
              </p>
              
              <div className="bg-light p-8 rounded-2xl border border-gray-100 mb-10">
                <h3 className="text-2xl font-bold text-dark mb-6">Key Features & Benefits</h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-orange-600 p-8 rounded-2xl text-white shadow-xl shadow-orange-500/20">
                 <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                 <p className="mb-6 text-orange-100">Get a comprehensive quote tailored to your specific requirements today.</p>
                 <Link to="/contact">
                   <Button variant="white">Request Consultation</Button>
                 </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Navigation Card */}
            <div className="bg-light p-6 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-dark mb-4 px-2">Other Services</h3>
              <nav className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <Link 
                    key={s.slug} 
                    to={`/services/${s.slug}`}
                    className={`p-3 rounded-lg flex items-center justify-between group transition-all ${
                      s.slug === slug 
                        ? 'bg-secondary text-white shadow-md' 
                        : 'hover:bg-white hover:shadow-sm text-gray-600'
                    }`}
                  >
                    <span className="font-medium">{s.title}</span>
                    {s.slug === slug ? <ArrowRight size={16} /> : null}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-dark text-white p-8 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
               <h3 className="text-xl font-bold mb-4">Need Expert Advice?</h3>
               <p className="text-gray-400 text-sm mb-6">Speak directly to our solar engineers for technical guidance.</p>
               <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-primary font-bold hover:text-white transition-colors">
                  <Phone size={20} />
                  <span>{PHONE_NUMBER}</span>
               </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;