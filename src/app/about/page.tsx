"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, Play, Flame, Car, Droplets, Star, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function AboutPage() {
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
              <span className="text-[10px] font-black tracking-widest text-zinc-300 uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tight text-white drop-shadow-2xl">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-green-200">VAADIVAASAL</span> STORY
            </h1>
            <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We started with a simple vision: to bring a world-class, FIFA-certified playing experience to our city. Today, we are the home of champions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT CONTENT ── */}
      <section className="py-24 relative bg-[#060a06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Our Mission</h2>
              <h3 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-tight leading-none mb-6">
                TO INSPIRE. TO PLAY. <span className="text-[#10b981]">TOGETHER.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are passionate about football and committed to providing world-class turf experiences for players of all ages and skill levels. Our mission is to create the perfect playing environment where passion meets performance. Whether it's a midnight casual match with friends or a high-stakes corporate league, we ensure the pitch is always ready.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-white/10 rounded-3xl p-8 bg-[#0a120a] hover:border-[#10b981]/50 transition-colors">
                  <h4 className="text-4xl md:text-5xl font-black font-heading text-white mb-2 flex items-center">
                    <NumberTicker value={50} />K+
                  </h4>
                  <p className="text-xs font-bold text-[#10b981] uppercase tracking-widest">Happy Players</p>
                </div>
                <div className="border border-white/10 rounded-3xl p-8 bg-[#0a120a] hover:border-[#10b981]/50 transition-colors">
                  <h4 className="text-4xl md:text-5xl font-black font-heading text-white mb-2 flex items-center">
                    <NumberTicker value={5} />+
                  </h4>
                  <p className="text-xs font-bold text-[#10b981] uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <Image src="/about_hero.png" alt="About Us" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                  <Play className="w-10 h-10 text-[#060a06] ml-2" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-[#0a120a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">The Standard</h2>
            <h3 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-tight">Why We Are Different</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-8 h-8 text-[#10b981]" />, title: "FIFA Certified Grass", desc: "Premium synthetic turf designed to prevent injuries and enhance ball control." },
              { icon: <Flame className="w-8 h-8 text-[#10b981]" />, title: "High-Mast Lighting", desc: "Stadium-grade LED floodlights for crystal clear visibility during night matches." },
              { icon: <Car className="w-8 h-8 text-[#10b981]" />, title: "Premium Parking", desc: "Spacious and secure parking facility accommodating cars and bikes effortlessly." },
              { icon: <Droplets className="w-8 h-8 text-[#10b981]" />, title: "Clean Washrooms", desc: "Hygienic and well-maintained changing rooms and washroom facilities." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#060a06] border border-white/5 p-8 rounded-3xl hover:border-[#10b981]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#060a06] py-16">
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
              <li><a href="/#pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing Plans</a></li>
              <li><a href="/#gallery" className="text-slate-400 hover:text-white transition-colors text-sm">Gallery</a></li>
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
