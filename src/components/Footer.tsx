import React from "react";
import Link from "next/link";
import { Award, Star, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-8 h-8 text-[#065f2e]" />
            <span className="text-2xl font-black tracking-tight text-white uppercase font-heading italic">VAADIVAASAL TURF</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
            Experience the perfect playing environment where passion meets performance. The finest FIFA-quality turf in the city.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-none bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-[#065f2e] hover:border-[#065f2e] hover:text-white transition-colors">
              <Star className="w-4 h-4 text-zinc-300" />
            </a>
            <a href="#" className="w-10 h-10 rounded-none bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-[#065f2e] hover:border-[#065f2e] hover:text-white transition-colors">
              <Users className="w-4 h-4 text-zinc-300" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black italic uppercase tracking-wider mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm font-bold">Home</Link></li>
            <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors text-sm font-bold">About Us</Link></li>
            <li><Link href="/facilities" className="text-zinc-400 hover:text-white transition-colors text-sm font-bold">Facilities</Link></li>
            <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-bold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black italic uppercase tracking-wider mb-6">Operating Hours</h4>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm">
              <span className="text-zinc-400 font-bold">Monday - Sunday</span>
              <span className="text-white font-black">24 Hours</span>
            </li>
            <li className="flex justify-between text-sm mt-4 pt-4 border-t border-zinc-800">
              <span className="text-zinc-500 font-bold">Support</span>
              <span className="text-white font-black">09:00 AM - 09:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">© 2026 Vaadivaasal Turf. All rights reserved.</p>
      </div>
    </footer>
  );
}
