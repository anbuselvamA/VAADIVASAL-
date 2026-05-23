"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Award, Calendar, MapPin, Phone, Mail, Send, Star, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
              <li><a href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/facilities" className="text-slate-400 hover:text-white transition-colors text-sm">Facilities</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
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
