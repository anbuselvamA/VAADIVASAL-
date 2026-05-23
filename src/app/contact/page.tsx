"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, MapPin, Phone, Mail, Send, Star, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#060a06] text-slate-100 font-sans selection:bg-white/30 relative">
      
      {/* ── SHARED NAVBAR ── */}
      <Navbar />

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
              <span className="text-[10px] font-black tracking-widest text-zinc-300 uppercase">We're Here For You</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tight text-white drop-shadow-2xl">
              GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-green-200">TOUCH</span>
            </h1>
            <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about bulk bookings, corporate events, or memberships? Drop us a message or visit us directly at the turf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-24 bg-[#0a120a] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Info Side */}
          <div>
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Reach Out</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-white uppercase tracking-tight mb-12">Contact Details</h3>
            
            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#10b981]/30 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-[#060a06] border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-8 h-8 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-wide uppercase">Location</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Vaadivaasal Turf, Main Road, Virudhachalam,<br/>Tamil Nadu 606001</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#10b981]/30 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-[#060a06] border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-8 h-8 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-wide uppercase">Call Us</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-1">+91 98765 43210</p>
                  <p className="text-slate-400 text-sm leading-relaxed">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#10b981]/30 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-[#060a06] border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-8 h-8 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-wide uppercase">Email</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-1">bookings@vaadivaasalturf.com</p>
                  <p className="text-slate-400 text-sm leading-relaxed">support@vaadivaasalturf.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#060a06] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl font-black font-heading text-white uppercase tracking-tight mb-8">Send a Message</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#0a120a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#0a120a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#0a120a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/50 transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-[#0a120a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/50 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button className="w-full h-14 rounded-xl bg-[#10b981] text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#059669] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
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
