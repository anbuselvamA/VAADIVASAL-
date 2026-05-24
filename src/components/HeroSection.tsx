"use client";

import React from "react";
import Link from "next/link";

interface HeroSectionProps {
  playerCount?: string;
  rating?: string;
  whatsapp?: string;
}

export default function HeroSection({
  playerCount = "50K",
  rating = "4.9",
  whatsapp = "919876543210"
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#04150A] text-white flex items-center">
      {/* PURE CSS KEYFRAMES INLINE FOR ANTIGRAVITY ANIMATIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-rotate {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.12; }
          80% { opacity: 0.06; }
        }
        @keyframes pulse-dot {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(29, 158, 117, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(29, 158, 117, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(29, 158, 117, 0); }
        }
        
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 5.5s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-3 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }
        .animate-float-4 { animation: float 4.5s ease-in-out infinite; animation-delay: 0.5s; }
        .animate-float-5 { animation: float 7s ease-in-out infinite; animation-delay: 1.5s; }
        
        .animate-float-bat { animation: float-rotate 6s ease-in-out infinite; animation-delay: 0.2s; }
        .animate-flicker { animation: flicker 4s infinite; }
        .animate-pulse-dot { animation: pulse-dot 2s infinite; }
      `}} />

      {/* BACKGROUND ELEMENTS */}
      {/* Stars */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[25%] left-[10%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[15%] left-[80%] w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-[30%] left-[60%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[40%] left-[40%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[10%] left-[45%] w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-[35%] left-[85%] w-1 h-1 bg-white rounded-full"></div>
      </div>

      {/* Floodlights (Left & Right) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Left Floodlight */}
        <div className="absolute top-10 -left-10 w-20 h-40 flex flex-col items-center transform rotate-[15deg]">
          <div className="grid grid-cols-2 gap-1 bg-[#111] p-1 border border-zinc-800">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
          </div>
          <div className="w-2 h-full bg-[#222]"></div>
        </div>
        {/* Left Beam */}
        <div className="absolute top-20 -left-10 w-[500px] h-[800px] bg-gradient-to-br from-[#FAC775] to-transparent origin-top-left transform rotate-[-30deg] animate-flicker mix-blend-screen pointer-events-none"></div>

        {/* Right Floodlight */}
        <div className="absolute top-10 -right-10 w-20 h-40 flex flex-col items-center transform -rotate-[15deg]">
          <div className="grid grid-cols-2 gap-1 bg-[#111] p-1 border border-zinc-800">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
          </div>
          <div className="w-2 h-full bg-[#222]"></div>
        </div>
        {/* Right Beam */}
        <div className="absolute top-20 -right-10 w-[500px] h-[800px] bg-gradient-to-bl from-[#FAC775] to-transparent origin-top-right transform rotate-[30deg] animate-flicker mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Turf & Pitch (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#0A2A10] border-t border-[#1a3a0a] overflow-hidden pointer-events-none">
        {/* Pitch Strip */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-full bg-[#1a3a0a] transform perspective(500px) rotateX(60deg) origin-bottom border-x border-[#2a4a1a]"></div>
        
        {/* Stumps (Left) */}
        <div className="absolute bottom-[10%] left-[calc(50%-4rem)] flex gap-1 items-end z-10">
          <div className="w-1 h-12 bg-[#D4A017] rounded-t-sm"></div>
          <div className="w-1 h-12 bg-[#D4A017] rounded-t-sm"></div>
          <div className="w-1 h-12 bg-[#D4A017] rounded-t-sm"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D4A017] rounded-full"></div>
        </div>
        
        {/* Stumps (Right) */}
        <div className="absolute bottom-[40%] right-[calc(50%-3rem)] flex gap-0.5 items-end z-10 scale-75 opacity-80">
          <div className="w-1 h-12 bg-[#D4A017] rounded-t-sm"></div>
          <div className="w-1 h-12 bg-[#D4A017] rounded-t-sm"></div>
          <div className="w-1 h-12 bg-[#D4A017] rounded-t-sm"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D4A017] rounded-full"></div>
        </div>
      </div>

      {/* FLOATING ELEMENTS (Desktop Only) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        
        {/* Bat */}
        <div className="absolute bottom-[25%] right-[25%] w-6 h-32 animate-float-bat origin-center">
          <div className="w-full h-3/4 bg-[#e8dcc4] rounded-b-md shadow-lg border border-[#c8bca4]"></div>
          <div className="w-1/2 h-1/4 bg-[#111] mx-auto rounded-t-md"></div>
        </div>

        {/* Balls */}
        <div className="absolute top-[30%] right-[15%] w-4 h-4 bg-red-600 rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5)] animate-float-1">
          <div className="w-full h-[1px] bg-white/50 absolute top-1/2 transform -translate-y-1/2"></div>
        </div>
        <div className="absolute bottom-[40%] right-[35%] w-3 h-3 bg-red-600 rounded-full shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.5)] animate-float-2"></div>
        <div className="absolute top-[50%] right-[5%] w-5 h-5 bg-red-600 rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5)] animate-float-3"></div>

        {/* Pills & Rating */}
        <div className="absolute top-[20%] right-[25%] bg-[#0A2A10]/80 border border-[#1D9E75]/30 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm animate-float-4">
          Live Booking Open
        </div>
        <div className="absolute top-[45%] right-[10%] bg-[#0A2A10]/80 border border-[#1D9E75]/30 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm animate-float-5">
          24/7 Floodlit Arena
        </div>
        <div className="absolute bottom-[35%] right-[15%] bg-[#0A2A10]/80 border border-[#1D9E75]/30 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm animate-float-2">
          Tournaments Welcome
        </div>

        {/* Rating Badge */}
        <div className="absolute top-[35%] right-[20%] bg-white text-black px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-float-1">
          <span className="font-black text-sm">{rating}</span>
          <span className="text-[#D4A017] tracking-widest text-sm">★★★★★</span>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center pt-20">
        <div className="w-full md:w-3/5">
          
          <div className="text-[#5DCAA5] uppercase tracking-[0.2em] text-xs font-bold mb-6">
            VAADIVAASAL TURF · VIRUDHACHALAM
          </div>

          <div className="inline-flex items-center gap-2 bg-[#0A2A10]/80 border border-[#1D9E75]/30 px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#1D9E75] rounded-full animate-pulse-dot"></div>
            <span className="text-white text-xs font-bold uppercase tracking-wider">Cricket & Football Arena</span>
          </div>

          <h1 className="text-[32px] md:text-[48px] font-black leading-[1.1] mb-6 tracking-tight">
            Play Under<br/>
            <span className="text-[#FAC775]">The Stars.</span><br/>
            Own The Pitch.
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-md mb-8">
            FIFA-certified turf · High-mast floodlights · Book in 60 seconds
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <Link 
              href="/booking" 
              className="bg-[#1D9E75] hover:bg-[#15805e] text-white text-center font-bold px-8 py-4 rounded-none transition-colors w-full sm:w-auto"
            >
              Book Your Slot →
            </Link>
            <Link 
              href="#pricing" 
              className="border border-white/20 hover:border-white text-white text-center font-bold px-8 py-4 rounded-none transition-colors w-full sm:w-auto"
            >
              View Pricing
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 border-l-4 border-[#1D9E75] pl-4 text-sm font-bold text-white/80 w-full justify-center sm:justify-start">
            <span>{playerCount}+ Players</span>
            <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block"></span>
            <span>24/7 Open</span>
            <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1">
              {rating} <span className="text-[#FAC775]">★</span> Rated
            </span>
          </div>
        </div>
      </div>

      {/* WHATSAPP CTA (Bottom Right) */}
      <a 
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-float-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>
    </section>
  );
}
