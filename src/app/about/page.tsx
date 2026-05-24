"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, Play, Flame, Car, Droplets, Star, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-[#065f2e]/20 relative">
      
      {/* ── SHARED NAVBAR ── */}
      <Navbar />

      {/* ── CINEMATIC HEADER ── */}
      <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-zinc-200 bg-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-200 bg-zinc-50 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-none bg-[#065f2e]"></span>
              <span className="text-[10px] font-black tracking-widest text-[#065f2e] uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase italic tracking-tight text-zinc-900 drop-shadow-sm">
              THE <span className="text-[#065f2e]">VAADIVAASAL</span> STORY
            </h1>
            <p className="mt-8 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              We started with a simple vision: to bring a world-class, FIFA-certified playing experience to our city. Today, we are the home of champions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT CONTENT ── */}
      <section className="py-16 md:py-24 relative bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Our Mission</h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-zinc-900 uppercase italic tracking-tight leading-none mb-6">
                TO INSPIRE. TO PLAY. <span className="text-[#065f2e]">TOGETHER.</span>
              </h3>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8">
                We are passionate about football and committed to providing world-class turf experiences for players of all ages and skill levels. Our mission is to create the perfect playing environment where passion meets performance. Whether it's a midnight casual match with friends or a high-stakes corporate league, we ensure the pitch is always ready.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="border border-zinc-200 rounded-none p-6 sm:p-8 bg-white shadow-sm">
                  <h4 className="text-4xl md:text-5xl font-black font-heading italic text-[#065f2e] mb-2 flex items-center">
                    <NumberTicker value={50} />K+
                  </h4>
                  <p className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">Happy Players</p>
                </div>
                <div className="border border-zinc-200 rounded-none p-6 sm:p-8 bg-white shadow-sm">
                  <h4 className="text-4xl md:text-5xl font-black font-heading italic text-[#065f2e] mb-2 flex items-center">
                    <NumberTicker value={5} />+
                  </h4>
                  <p className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-none overflow-hidden border border-zinc-200 shadow-xl group bg-zinc-900"
            >
              <video 
                src="/turf_video.mp4" 
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-16 md:py-24 bg-white border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">The Standard</h2>
            <h3 className="text-4xl md:text-6xl font-black font-heading text-zinc-900 uppercase italic tracking-tight">WHY WE ARE DIFFERENT</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-8 h-8 text-white" />, title: "FIFA Certified Grass", desc: "Premium synthetic turf designed to prevent injuries and enhance ball control." },
              { icon: <Flame className="w-8 h-8 text-white" />, title: "High-Mast Lighting", desc: "Stadium-grade LED floodlights for crystal clear visibility during night matches." },
              { icon: <Car className="w-8 h-8 text-white" />, title: "Premium Parking", desc: "Spacious and secure parking facility accommodating cars and bikes effortlessly." },
              { icon: <Droplets className="w-8 h-8 text-white" />, title: "Clean Washrooms", desc: "Hygienic and well-maintained changing rooms and washroom facilities." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-50 border border-zinc-200 p-8 rounded-none shadow-sm hover:border-[#065f2e] hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 rounded-none bg-[#065f2e] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black italic text-zinc-900 mb-3 uppercase tracking-wide">{item.title}</h4>
                <p className="text-zinc-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHARED FOOTER ── */}
      <Footer />

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
