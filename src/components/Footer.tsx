import React from "react";
import { Award, Star, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060a06] py-16 mt-auto">
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
  );
}
