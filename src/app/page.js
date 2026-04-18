"use client";

import React from 'react';
import { Phone, MessageCircle, CheckCircle, MapPin, Clock, Star } from 'lucide-react';

export default function LandingPage() {
  const phoneNumber = "7078820452"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi, I want to book a Full Body Massage. Please share details.`;

  const services = [
    { name: "1 hour", price: "₹2000", time: "" },
    { name: "2 hour", price: "₹3500", time: "" },
    { name: "3 hour", price: "₹4000", time: " " },
    { name: " Day", price: "₹8000", time: "" },
    { name: " Night", price: "₹8000", time: "" },
    { name: "Full day", price: "₹15000", time: "" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf7] font-sans text-stone-900 pb-20 md:pb-0">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop')" }}
        />
        
        <div className="relative z-20 px-4 max-w-4xl">
          <div className="flex justify-center mb-4">
            <span className="bg-emerald-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Premium Luxury Spa</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Full Service Spa</h1>
          <p className="text-xl md:text-2xl mb-10 font-light tracking-wide italic text-stone-200">
            Professional & Hygienic Services. <br/>
            <span className="font-bold text-emerald-400 text-2xl">★ FULL SERVICE AVAILABLE ★</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`tel:${phoneNumber}`} className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full flex items-center justify-center font-bold text-lg transition-all shadow-2xl hover:scale-105">
              <Phone className="mr-2" size={22} /> Call For Booking
            </a>
            <a href={whatsappLink} target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full flex items-center justify-center font-bold text-lg transition-all shadow-2xl hover:scale-105">
              <MessageCircle className="mr-2" size={22} /> WhatsApp Now
            </a>
          </div>
        </div>
      </header>

      {/* --- PRICING SECTION --- */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Services & Pricing</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-2xl flex justify-between items-center shadow-md border-l-4 border-emerald-600">
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-stone-500 text-sm italic">{item.time} </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-emerald-700">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FULL SERVICE HIGHLIGHT --- */}
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 italic">Special Full Body Service</h2>
            <p className="text-stone-400 mb-10 text-lg">
                We provide a complete range of luxury spa treatments. All services are performed by 
                trained professionals in a clean and safe environment. 
                <br/><span className="text-emerald-400 font-bold mt-4 block text-xl underline uppercase">Full Service is available upon request.</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Hygienic', 'Private', 'Certified', 'Air-con'].map(tag => (
                    <div key={tag} className="border border-stone-700 py-3 rounded-lg text-sm uppercase tracking-widest">{tag}</div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CONTACT DETAILS --- */}
      <section className="py-20 px-4 bg-emerald-50 text-center">
        <h2 className="text-3xl font-serif font-bold mb-10">Visit or Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-lg">
            <div className="flex items-center justify-center">
                <MapPin className="text-emerald-600 mr-2" />
                <span>Premium Spa Center, Shop number 44 new bus stand, Roorkee</span>
            </div>
            <div className="flex items-center justify-center">
                <Clock className="text-emerald-600 mr-2" />
                <span>24 x 7 </span>
                
            </div>
             <div className="flex items-center justify-center">
                <Clock className="text-emerald-600 mr-2" />
                <span> 91 7078820452 </span>
                
            </div>
        </div>
      </section>

      {/* --- MOBILE STICKY FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 md:hidden z-50 flex gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <a href={`tel:${phoneNumber}`} className="flex-1 bg-stone-900 text-white py-4 rounded-xl flex items-center justify-center font-bold">
          <Phone className="mr-2" size={18} /> Call
        </a>
        <a href={whatsappLink} target="_blank" className="flex-1 bg-green-500 text-white py-4 rounded-xl flex items-center justify-center font-bold">
          <MessageCircle className="mr-2" size={18} /> WhatsApp
        </a>
      </div>

      <footer className="py-10 bg-white text-center text-stone-400 text-sm border-t border-stone-100">
        <p>fullservicesspa.in © 2026 | Powered by Excellence</p>
      </footer>
    </div>
  );
}