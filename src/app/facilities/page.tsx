"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, Flame, Car, Droplets, Star, Users, MessageCircle, Activity, Coffee, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
              <span className="text-[10px] font-black tracking-widest text-[#065f2e] uppercase">Premium Amenities</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tight italic text-zinc-900 drop-shadow-sm">
              WORLD-CLASS <span className="text-[#065f2e]">FACILITIES</span>
            </h1>
            <p className="mt-8 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Every inch of our turf is designed to deliver a professional, safe, and exhilarating experience. Explore what makes us the best in the city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXPANDED GALLERY ── */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Our Ground</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-zinc-900 uppercase italic tracking-tight">THE PLAYING SURFACE</h3>
          </div>
          
          <Masonry
            breakpointCols={{
              default: 3,
              1024: 2,
              640: 1
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {galleryImages.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative rounded-none overflow-hidden cursor-pointer border border-zinc-200 bg-white shadow-sm group mb-6"
              >
                {src.startsWith('http') ? (
                  <img src={src} alt={`Turf Ground ${i}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <Image src={src} alt={`Turf Ground ${i}`} width={800} height={600} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* ── DETAILED AMENITIES LIST ── */}
      <section className="py-16 md:py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-zinc-900 uppercase italic tracking-tight">EVERYTHING YOU NEED</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Award className="w-8 h-8 text-white" />, title: "FIFA Certified Grass", desc: "Non-abrasive, 50mm premium synthetic turf designed to prevent injuries." },
              { icon: <Flame className="w-8 h-8 text-white" />, title: "High-Mast Lighting", desc: "Stadium-grade 200W LED floodlights for zero-shadow night matches." },
              { icon: <Car className="w-8 h-8 text-white" />, title: "Secure Parking", desc: "CCTV monitored spacious parking facility for cars and bikes." },
              { icon: <Droplets className="w-8 h-8 text-white" />, title: "Washrooms & Showers", desc: "Clean, hygienic changing rooms and showers for post-match freshness." },
              { icon: <Activity className="w-8 h-8 text-white" />, title: "Pro Equipment", desc: "High-quality footballs, standard bibs, and first-aid kits available on site." },
              { icon: <Coffee className="w-8 h-8 text-white" />, title: "Refreshment Area", desc: "Seating lounge with access to cold water and sports drinks." },
              { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "24/7 Security", desc: "Fully compounded area with round-the-clock security personnel." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-50 border border-zinc-200 p-8 rounded-none shadow-sm hover:border-[#065f2e] hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 rounded-none bg-[#065f2e] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black italic text-zinc-900 mb-3 tracking-wide uppercase">{item.title}</h4>
                <p className="text-zinc-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
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
