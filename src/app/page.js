"use client";

import React from 'react';
import Script from 'next/script'; 
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  const phoneNumber = "919557388824"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi,%20I%20want%20to%20book%20a%20Wellness%20Therapy%20session.%20Please%20share%20available%20slots.`;

  const services = [
    { name: "Stress Relief Therapy (60 Mins)", price: "₹2000", description: "Deep relaxation technique for muscle tension." },
    { name: "Aromatherapy & Wellness (90 Mins)", price: "₹3500", description: "Essential oils treatment to rejuvenate mind and body." },
    { name: "Premium Holistic Therapy (120 Mins)", price: "₹4000", description: "Complete therapeutic experience by certified experts." },
    { name: "Executive Renewal Package", price: "₹8000", description: "Designed for corporate stress and posture correction." },
    { name: "Luxury Rejuvenation Ritual", price: "₹15000", description: "Full day customized skin and body care therapy." },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf7] font-sans text-stone-900 pb-20 md:pb-0">
      
      {/* --- GOOGLE TAG --- */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18082233429"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18082233429');
        `}
      </Script>

      {/* --- HERO SECTION --- */}
      <header className="relative h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* UPDATED: 100% Google Ads Safe & Legal Background Image (Zen Spa Stones & Bamboo style) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop')" }}
        />
        
        <div className="relative z-20 px-4 max-w-4xl">
          <div className="flex justify-center mb-4">
            <span className="bg-emerald-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Certified Professional Wellness Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Elite Wellness & Therapy Spa</h1>
          <p className="text-lg md:text-xl mb-10 font-light tracking-wide text-stone-200 max-w-2xl mx-auto">
            Experience premium therapeutic healing and professional stress relief management. 
            <span className="block mt-2 text-emerald-400 font-semibold text-lg">Strictly Professional & Hygienic Therapies Only</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:+919557388824`} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl flex items-center justify-center font-bold text-base transition-all shadow-xl">
              <Phone className="mr-2" size={20} /> Book Appointment
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl flex items-center justify-center font-bold text-base transition-all shadow-xl">
              <MessageCircle className="mr-2" size={20} /> WhatsApp Consultant
            </a>
          </div>
        </div>
      </header>

      {/* --- PRICING & SERVICES --- */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Therapeutic Menu & Pricing</h2>
          <p className="text-stone-600 max-w-md mx-auto text-sm">All sessions are conducted by qualified professionals using premium organic products.</p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-xl flex justify-between items-center shadow-sm border-l-4 border-emerald-600 transition-hover hover:shadow-md">
              <div className="pr-4">
                <h3 className="text-lg font-bold text-stone-800">{item.name}</h3>
                <p className="text-stone-500 text-xs mt-1">{item.description}</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <span className="text-xl font-bold text-emerald-700">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPLIANCE & SAFETY HIGHLIGHT --- */}
      <section className="bg-stone-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <ShieldCheck className="mx-auto text-emerald-500 mb-4" size={40} />
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Our Commitment to Hygiene & Safety</h2>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              We operate under strict wellness industry regulations. Our facility ensures certified clinical standard sanitization, private individual treatment rooms, and air-conditioned comforting spaces for genuine stress recovery.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {['100% Hygienic', 'Private Suites', 'Certified Staff', 'Clinical Products'].map(tag => (
                    <div key={tag} className="border border-stone-800 py-2.5 rounded-lg text-xs uppercase tracking-widest text-stone-300 bg-stone-950/50">{tag}</div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CONTACT DETAILS --- */}
      <section className="py-16 px-4 bg-emerald-50/50 text-center border-b border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-8">Location & Timing</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm md:text-base text-stone-700">
            <div className="flex items-center max-w-sm text-left">
                <MapPin className="text-emerald-600 mr-3 flex-shrink-0" size={20} />
                <span>Premium Spa Center, Shop number 44, Near New Bus Stand, Roorkee, Uttarakhand</span>
            </div>
            <div className="flex items-center">
                <Clock className="text-emerald-600 mr-2" size={20} />
                <span>Open Daily: 09:00 AM - 09:00 PM</span>
            </div>
        </div>
      </section>

      {/* --- FOOTER DISCLAIMER --- */}
      <footer className="py-12 bg-stone-100 text-center text-stone-500 text-xs px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Elite Wellness & Therapy Spa offers purely professional therapeutic, massage, and relaxation services for health and stress management purposes. We strictly do not tolerate or entertain any inappropriate or non-therapeutic requests.
          </p>
          <div className="flex justify-center gap-4 text-stone-400 font-medium">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:underline">Medical Disclaimer</a>
          </div>
          <p className="pt-4 border-t border-stone-200 text-[11px]">
            fullservicesspa.in © 2026 | Certified Holistic Wellness Hub
          </p>
        </div>
      </footer>

      {/* --- MOBILE STICKY FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 md:hidden z-50 flex gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <a href={`tel:+919557388824`} className="flex-1 bg-stone-900 text-white py-3.5 rounded-xl flex items-center justify-center font-bold text-sm">
          <Phone className="mr-2" size={16} /> Call Expert
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white py-3.5 rounded-xl flex items-center justify-center font-bold text-sm">
          <MessageCircle className="mr-2" size={16} /> WhatsApp
        </a>
      </div>

    </div>
  );
}