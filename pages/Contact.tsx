import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import { ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', bill: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          bill: Number(formState.bill),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', bill: '' });
    } catch (error) {
      console.error(error);
      alert('Something went wrong while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-light min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
           
           {/* Form Section */}
           <div className="md:w-3/5 p-8 md:p-16">
              <h2 className="text-3xl font-extrabold text-dark mb-4">Get Your Free Quote</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our solar experts will get back to you within 24 hours.</p>

              {isSuccess ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center">
                   <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                   <p>Your details have been submitted. We will contact you shortly.</p>
                   <button onClick={() => setIsSuccess(false)} className="text-sm underline mt-4">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="+91 98765..."
                          value={formState.phone}
                          onChange={e => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Average Monthly Bill (₹)</label>
                        <input 
                          required
                          type="number" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="e.g. 3000"
                          value={formState.bill}
                          onChange={e => setFormState({...formState, bill: e.target.value})}
                        />
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                   </div>
                   <Button type="submit" className="w-full" isLoading={isSubmitting}>
                      Submit Request
                   </Button>
                </form>
              )}
           </div>

           {/* Info Section */}
           <div className="md:w-2/5 bg-secondary text-white p-8 md:p-16 flex flex-col justify-between">
              <div>
                 <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                 <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                       <MapPin className="text-primary mt-1" />
                       <div>
                          <p className="font-bold text-blue-100 uppercase text-sm mb-1">Headquarters</p>
                          <p className="text-lg">{ADDRESS}</p>
                       </div>
                    </li>
                    <li className="flex items-center gap-4">
                       <Phone className="text-primary" />
                       <div>
                          <p className="font-bold text-blue-100 uppercase text-sm mb-1">Phone</p>
                          <p className="text-lg">{PHONE_NUMBER}</p>
                       </div>
                    </li>
                    <li className="flex items-center gap-4">
                       <Mail className="text-primary" />
                       <div>
                          <p className="font-bold text-blue-100 uppercase text-sm mb-1">Email</p>
                          <p className="text-lg">{EMAIL_ADDRESS}</p>
                       </div>
                    </li>
                    <li className="flex items-center gap-4">
                       <Clock className="text-primary" />
                       <div>
                          <p className="font-bold text-blue-100 uppercase text-sm mb-1">Working Hours</p>
                          <p className="text-lg">Mon - Sat: 9:00 AM - 7:00 PM</p>
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="mt-12">
                 <div className="w-full h-48 bg-blue-900 rounded-xl flex items-center justify-center">
                    <span className="text-blue-300">Map Embed Placeholder</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;