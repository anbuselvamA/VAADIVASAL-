"use client";

import React, { useState, useEffect } from "react";
import { Award, Calendar, Menu, Play } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none ${scrolled ? 'pt-4 pb-2' : 'pt-6'}`}>
      <nav className={`pointer-events-auto w-full max-w-7xl px-6 py-3 border rounded-2xl flex items-center justify-between transition-all duration-500 shadow-sm ${scrolled ? 'bg-white/90 backdrop-blur-xl border-zinc-200' : 'bg-white border-zinc-200'}`}>
        
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#065f2e] rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 uppercase font-heading italic mt-1">VAADIVAASAL</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-zinc-600 uppercase tracking-widest bg-zinc-50 p-1.5 rounded-xl border border-zinc-200">
          {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-5 py-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#065f2e] group-hover:w-1/2 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a href="/booking" className="hidden sm:flex bg-[#065f2e] hover:bg-[#04401f] text-white font-black uppercase tracking-wide px-6 py-2.5 rounded-xl text-xs transition-all items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
            <Calendar className="w-4 h-4" /> Book Slot
          </a>

          {/* Mobile Menu Sheet */}
          <div className="lg:hidden pointer-events-auto">
            <Sheet>
              <SheetTrigger className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-zinc-200 transition-colors">
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95 backdrop-blur-3xl border-l border-zinc-200 w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full pt-10">
                  <div className="flex items-center gap-2 mb-12">
                    <div className="w-8 h-8 bg-[#065f2e] rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-zinc-900 uppercase font-heading italic mt-1">VAADIVAASAL</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href}
                        className="px-4 py-4 rounded-xl text-lg font-bold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all border border-transparent hover:border-zinc-200 flex items-center justify-between group"
                      >
                        {link.name}
                        <span className="w-6 h-[2px] bg-[#065f2e] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-auto pb-8 space-y-4">
                    <a href="/booking" className="w-full bg-[#065f2e] hover:bg-[#04401f] text-white font-black uppercase tracking-wide px-6 py-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md">
                      <Calendar className="w-5 h-5" /> Book Your Slot Now
                    </a>
                    <a href="/about" className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 font-bold uppercase tracking-wide px-6 py-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" /> Watch Trailer
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}
