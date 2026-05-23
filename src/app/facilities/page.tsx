"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, Flame, Car, Droplets, Star, Users, MessageCircle, Activity, Coffee, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function FacilitiesPage() {
  const galleryImages = [
    "/turf_night_view.png",
    "/facilities_hero.png",
    "/about_hero.png",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800",
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=800",
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800"
  ];

  return (
    <main className="min-h-screen bg-[#060a06] text-slate-100 font-sans selection:bg-white/30 relative">
      
      {/* ── LUXURY STICKY NAVBAR ── */}
      <div className="sticky top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-7xl px-6 py-3 border border-white/10 bg-[#060a06]/80 backdrop-blur-2xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-center justify-between transition-all duration-500">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#10b981] to-emerald-400 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-black tracking-tight text-white uppercase font-heading mt-1">VAADIVAASAL</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest bg-white/5 p-1.5 rounded-xl border border-white/5">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Facilities", href: "/facilities" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#10b981] group-hover:w-1/2 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <a href="/booking" className="bg-white hover:bg-zinc-200 text-[#060a06] font-black uppercase tracking-wide px-6 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
            <Calendar className="w-4 h-4" /> Book Slot
          </a>
        </nav>
      </div>

      {/* ── CINEMATIC HEADER ── */}
      <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-white/5">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(16, 185, 129, 0.15)" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span className="text-[10px] font-black tracking-widest text-zinc-300 uppercase">Premium Amenities</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tight text-white drop-shadow-2xl">
              WORLD-CLASS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-green-200">FACILITIES</span>
            </h1>
            <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Every inch of our turf is designed to deliver a professional, safe, and exhilarating experience. Explore what makes us the best in the city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXPANDED GALLERY ── */}
      <section className="py-24 bg-[#0a120a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Our Ground</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-white uppercase tracking-tight">The Playing Surface</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-black group"
              >
                {src.startsWith('http') ? (
                  <img src={src} alt={`Turf Ground ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <Image src={src} alt={`Turf Ground ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED AMENITIES LIST ── */}
      <section className="py-24 bg-[#060a06] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-white uppercase tracking-tight">Everything You Need</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-8 h-8 text-[#10b981]" />, title: "FIFA Certified Grass", desc: "Non-abrasive, 50mm premium synthetic turf designed to prevent injuries." },
              { icon: <Flame className="w-8 h-8 text-[#10b981]" />, title: "High-Mast Lighting", desc: "Stadium-grade 200W LED floodlights for zero-shadow night matches." },
              { icon: <Car className="w-8 h-8 text-[#10b981]" />, title: "Secure Parking", desc: "CCTV monitored spacious parking facility for cars and bikes." },
              { icon: <Droplets className="w-8 h-8 text-[#10b981]" />, title: "Washrooms & Showers", desc: "Clean, hygienic changing rooms and showers for post-match freshness." },
              { icon: <Activity className="w-8 h-8 text-[#10b981]" />, title: "Pro Equipment", desc: "High-quality footballs, standard bibs, and first-aid kits available on site." },
              { icon: <Coffee className="w-8 h-8 text-[#10b981]" />, title: "Refreshment Area", desc: "Seating lounge with access to cold water and sports drinks." },
              { icon: <ShieldCheck className="w-8 h-8 text-[#10b981]" />, title: "24/7 Security", desc: "Fully compounded area with round-the-clock security personnel." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#10b981]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#0a120a] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-8 h-8 text-white" />
              <span className="text-2xl font-black tracking-tight text-white uppercase font-heading">VAADIVAASAL TURF</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Experience the perfect playing environment where passion meets performance. The finest FIFA-quality turf in the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Star className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Users className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/#pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing Plans</a></li>
              <li><a href="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Operating Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Monday - Sunday</span>
                <span className="text-white font-bold">24 Hours</span>
              </li>
              <li className="flex justify-between text-sm mt-4 pt-4 border-t border-white/10">
                <span className="text-zinc-500">Support</span>
                <span className="text-white font-bold">09:00 AM - 09:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">© 2026 Vaadivaasal Turf. All rights reserved.</p>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>
    </main>
  );
}
