"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, MapPin, Phone, Mail, Send, Star, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
              <span className="text-[10px] font-black tracking-widest text-[#065f2e] uppercase">We're Here For You</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tight italic text-zinc-900 drop-shadow-sm">
              GET IN <span className="text-[#065f2e]">TOUCH</span>
            </h1>
            <p className="mt-8 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about bulk bookings, corporate events, or memberships? Drop us a message or visit us directly at the turf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-16 md:py-24 bg-zinc-50 relative border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          
          {/* Info Side */}
          <div>
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Reach Out</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-zinc-900 uppercase italic tracking-tight mb-8 lg:mb-12">CONTACT DETAILS</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-4 sm:gap-6 p-6 rounded-none bg-white border border-zinc-200 hover:border-[#065f2e] transition-colors group shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-none bg-[#065f2e] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-black text-lg mb-2 tracking-wide uppercase italic">Location</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">Vaadivaasal Turf, Main Road, Virudhachalam,<br/>Tamil Nadu 606001</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 p-6 rounded-none bg-white border border-zinc-200 hover:border-[#065f2e] transition-colors group shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-none bg-[#065f2e] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-black text-lg mb-2 tracking-wide uppercase italic">Call Us</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-1">+91 98765 43210</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 p-6 rounded-none bg-white border border-zinc-200 hover:border-[#065f2e] transition-colors group shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-none bg-[#065f2e] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-black text-lg mb-2 tracking-wide uppercase italic">Email</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-1">bookings@vaadivaasalturf.com</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">support@vaadivaasalturf.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white border border-zinc-200 rounded-none p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-zinc-900 uppercase italic tracking-tight mb-8">SEND A MESSAGE</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#065f2e] focus:ring-1 focus:ring-[#065f2e] transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#065f2e] focus:ring-1 focus:ring-[#065f2e] transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#065f2e] focus:ring-1 focus:ring-[#065f2e] transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#065f2e] focus:ring-1 focus:ring-[#065f2e] transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button className="w-full h-14 rounded-none bg-[#065f2e] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#04401f] transition-all shadow-sm hover:shadow-md">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
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
