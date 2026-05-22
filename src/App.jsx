import React, { useState } from 'react';
import { 
  Phone, Calendar, Clock, Shield, MapPin, Users,
  Check, X, Play, Menu, MessageSquare, Sparkles, Award, Eye, Flame,
  Car, Droplets, Camera, Target, Heart, Grid, Shirt, ChevronRight, Coffee,
  Headphones, Star, ShieldCheck, Footprints, Trophy, Diamond, IndianRupee, Plus, Wind, CheckCircle2
} from 'lucide-react';

/* ─────────── Colours from the mockup ─────────── */
const BG    = '#060a06';   // page background — very dark olive-black
const CARD  = '#0c140c';   // card / section bg
const CARD2 = '#0a120a';   // slightly darker card
const BORD  = '#1a2a1a';   // border
const GREEN = '#3aaa5c';   // natural turf grass green — matches field in photo
const DKGRN = '#0d1f12';   // deep dark green (CTA banners)

function AboutUsView({ setActiveTab }) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* ════════════════════════════════════════
          ABOUT HERO BANNER
      ════════════════════════════════════════ */}
      <section className="relative rounded-2xl overflow-hidden flex flex-col border" style={{ minHeight: 460, borderColor: BORD, backgroundImage: "url('/about_hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Left-to-right dark fade so text is readable on left, field visible on right */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #060a06 0%, #060a06 35%, rgba(6,10,6,0.85) 55%, rgba(6,10,6,0.4) 75%, rgba(6,10,6,0.05) 100%)' }} />
        {/* Bottom fade for features bar */}
        <div className="absolute bottom-0 inset-x-0 h-24" style={{ background: 'linear-gradient(to top, rgba(6,10,6,0.98), transparent)' }} />

        {/* Hero text */}
        <div className="relative z-10 flex-grow px-6 sm:px-10 md:px-14 pt-12 sm:pt-16 pb-8 flex flex-col justify-start gap-4 max-w-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase mb-3" style={{ color: GREEN }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }}></span>
              About Us
            </div>
            <h1 className="font-black tracking-tight leading-none text-white uppercase text-4xl sm:text-5xl md:text-6xl">
              MORE THAN JUST A TURF.<br />
              <span style={{ color: GREEN }}>WE BUILD CHAMPIONS.</span>
            </h1>
            <p className="mt-4 text-[14px] text-slate-300 leading-relaxed font-medium">
              We are passionate about football and committed to providing world-class turf experience for players of all ages and skill levels.
            </p>
          </div>
        </div>

        {/* Features bar — bottom strip */}
        <div className="relative z-10 mt-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6 sm:px-10 md:px-14 py-5 border-t" style={{ background: 'rgba(6,10,6,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.06)' }}>
          {[
            { icon: Award,    title: 'Premium Turf',   sub: 'Quality Grass' },
            { icon: Flame,    title: 'Night Play',     sub: 'Bright Lights' },
            { icon: Shield,   title: 'Safe & Secure',  sub: 'Environment' },
            { icon: Calendar, title: 'Easy Booking',   sub: 'Instant Confirmation' },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}30` }}>
                <Icon className="w-4.5 h-4.5" style={{ color: GREEN }} />
              </div>
              <div>
                <p className="text-[12px] font-black text-white">{title}</p>
                <p className="text-[10px] text-slate-400 font-medium">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════ */}
      <section className="rounded-xl border p-4 sm:p-5" style={{ background: CARD, borderColor: BORD }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 md:divide-x divide-emerald-950/40">
          {[
            { val: '5+',   label: 'Years of Excellence' },
            { val: '50K+', label: 'Happy Players' },
            { val: '10+',  label: 'Premium Turfs' },
            { val: '500+', label: 'Tournaments' },
            { val: '4.9★', label: 'Player Rating' },
          ].map(({ val, label }, idx) => (
            <div key={label} className={`flex flex-col items-center justify-center ${idx >= 2 ? 'pt-4 sm:pt-0' : ''} ${idx > 0 ? 'md:pl-4' : ''}`}>
              <span className="text-3xl font-black tracking-tight" style={{ color: GREEN }}>{val}</span>
              <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          MISSION & VALUES GRID
      ════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column — OUR MISSION */}
        <div className="lg:col-span-8 rounded-2xl border p-6 sm:p-8 flex flex-col gap-6" style={{ background: CARD, borderColor: BORD }}>
          <div>
            <span className="text-xs font-black tracking-wider uppercase" style={{ color: GREEN }}>Our Mission</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">TO INSPIRE. TO PLAY. TOGETHER.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-grow">
            <div className="space-y-5">
              <p className="text-[13px] text-slate-300 leading-relaxed font-medium">
                Our mission is to create the perfect playing environment where passion meets performance. We aim to promote sportsmanship, fitness, and team spirit through top-quality facilities.
              </p>
              <button 
                onClick={() => {
                  setActiveTab('Home');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[12px] font-black uppercase text-black transition-all hover:opacity-90 cursor-pointer"
                style={{ background: GREEN }}>
                Explore Facilities <span className="font-extrabold">→</span>
              </button>
            </div>

            {/* Video preview card */}
            <div className="rounded-xl overflow-hidden border relative flex flex-col justify-center items-center aspect-[16/10] group cursor-pointer" style={{ borderColor: BORD, backgroundImage: "url('/turf_night_view.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all" />
              <button 
                onClick={() => alert('Launching video tour...')}
                className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white bg-black/50 text-white transition-all transform group-hover:scale-115"
                style={{ borderColor: GREEN, color: GREEN }}
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column — OUR VALUES */}
        <div className="lg:col-span-4 rounded-2xl border p-6 sm:p-8 flex flex-col gap-6" style={{ background: CARD, borderColor: BORD }}>
          <div>
            <span className="text-xs font-black tracking-wider uppercase" style={{ color: GREEN }}>Our Values</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">OUR VALUES</h2>
          </div>

          <div className="space-y-4 flex-grow flex flex-col justify-between">
            {[
              { icon: Target,    title: 'PASSION',   desc: 'We live and breathe football.' },
              { icon: Award,     title: 'QUALITY',   desc: 'Top-notch facilities for the best experience.' },
              { icon: Users,     title: 'COMMUNITY', desc: 'Building a strong football community.' },
              { icon: Shield,    title: 'INTEGRITY', desc: 'Honesty, safety and respect always.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3.5 items-start p-3 rounded-xl border transition-all hover:border-emerald-900/60" style={{ background: CARD2, borderColor: BORD }}>
                <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: `${GREEN}60`, background: `${GREEN}12` }}>
                  <Icon className="w-4 h-4" style={{ color: GREEN }} />
                </div>
                <div>
                  <h4 className="text-[12px] font-black text-white tracking-wide uppercase">{title}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: GREEN }}>Why Choose Us?</h2>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">WHY CHOOSE US?</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: Award,    title: 'FIFA Quality Turf',   desc: 'International standard synthetic turf.' },
            { icon: Flame,    title: 'Bright Flood Lights', desc: 'Perfect visibility for night games.' },
            { icon: Car,      title: 'Ample Parking',       desc: 'Spacious and secure parking area.' },
            { icon: Droplets, title: 'Clean Washrooms',     desc: 'Hygienic and well-maintained.' },
            { icon: Camera,   title: 'CCTV Security',       desc: '24/7 surveillance for your safety.' },
          ].map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className={`rounded-xl border p-4 flex flex-col gap-3 transition-all hover:border-emerald-800/50 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`} style={{ background: CARD, borderColor: BORD }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}30` }}>
                <Icon className="w-4 h-4" style={{ color: GREEN }} />
              </div>
              <div className="space-y-1">
                <h4 className="text-[12px] font-black text-white leading-tight">{title}</h4>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          READY TO PLAY CTA
      ════════════════════════════════════════ */}
      <section className="rounded-2xl border overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12" style={{ background: DKGRN, borderColor: '#2a4a2a' }}>
        <div className="absolute top-[-60%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: `${GREEN}08`, filter: 'blur(100px)' }} />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}35` }}>
            <Calendar className="w-7 h-7" style={{ color: GREEN }} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">READY TO PLAY AT THE <span style={{ color: GREEN }}>BEST TURF</span> IN TOWN?</h2>
            <p className="text-[13px] text-slate-300 mt-1.5 font-medium">Book your slot now and experience the difference.</p>
          </div>
        </div>

        <div className="flex items-center gap-6 relative z-10 flex-shrink-0">
          <button 
            onClick={() => {
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-8 py-3.5 rounded-xl text-[13px] font-black text-black flex items-center gap-2 transition-all hover:opacity-90 cursor-pointer"
            style={{ background: GREEN }}>
            <Calendar className="w-4 h-4" /> Book a Turf
          </button>

          {/* Soccer ball */}
          <div className="w-16 h-16 rounded-full bg-white shadow-2xl overflow-hidden flex-shrink-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="white" stroke="#111" strokeWidth="2"/>
              <polygon points="50,28 66,42 60,62 40,62 34,42" fill="#111"/>
              <polygon points="50,0 38,14 62,14" fill="#111"/>
              <polygon points="8,33 0,46 10,56" fill="#111"/>
              <polygon points="92,33 100,46 90,56" fill="#111"/>
              <polygon points="28,92 18,100 42,100" fill="#111"/>
              <polygon points="72,92 82,100 58,100" fill="#111"/>
              <path d="M50,28 L50,14 M66,42 L82,35 M60,62 L74,76 M40,62 L26,76 M34,42 L18,35" stroke="#111" strokeWidth="2.5" fill="none"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

function FacilitiesView({ setActiveTab }) {
  const facilities = [
    {
      title: "FIFA Quality Turf",
      desc: "International standard synthetic turf for perfect ball control and player safety.",
      img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80",
      icon: Award,
    },
    {
      title: "Bright Flood Lights",
      desc: "High intensity LED lights for excellent visibility during night games.",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
      icon: Flame,
    },
    {
      title: "Ample Parking",
      desc: "Spacious and secure parking area for cars and bikes with easy access.",
      img: "https://images.unsplash.com/photo-1506521788723-868114856b3e?w=600&q=80",
      icon: Car,
    },
    {
      title: "Clean Washrooms",
      desc: "Hygienic and well-maintained washrooms and changing rooms.",
      img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
      icon: Shirt,
    },
    {
      title: "Drinking Water",
      desc: "RO purified drinking water available for players and visitors.",
      img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80",
      icon: Droplets,
    },
    {
      title: "CCTV Security",
      desc: "24/7 CCTV surveillance for complete safety and peace of mind.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
      icon: Camera,
    },
    {
      title: "First Aid",
      desc: "First aid kit and medical assistance always available.",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=80",
      icon: Heart,
    },
    {
      title: "Quality Equipment",
      desc: "Well-maintained goalposts, balls and other quality equipment.",
      img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=600&q=80",
      icon: Target,
    },
    {
      title: "Player Lounge",
      desc: "Comfortable seating area for players to relax and unwind.",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      icon: Users,
    },
    {
      title: "Snacks & Beverages",
      desc: "Wide range of snacks and beverages to keep you refreshed.",
      img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
      icon: Coffee,
    },
  ];

  const subFeatures = [
    { icon: Award,    title: 'Premium',   sub: 'Quality' },
    { icon: Shield,   title: '100%',      sub: 'Safe & Secure' },
    { icon: Sparkles, title: 'Well',      sub: 'Maintained' },
    { icon: Flame,    title: '5 Star',    sub: 'Experience' },
  ];

  return (
    <div className="space-y-0 animate-fade-in -mx-5 lg:-mx-8">

      {/* ════════════════════════════════════════
          FACILITIES HERO BANNER
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{
          minHeight: 420,
          backgroundImage: "url('/facilities_hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.3) 100%)' }} />

        {/* Content */}
        <div className="relative z-10 flex-grow px-6 sm:px-10 md:px-14 pt-12 sm:pt-16 pb-6 flex flex-col justify-start gap-3 max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-1.5 text-[11px] font-black tracking-widest uppercase" style={{ color: GREEN }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }}></span>
            Our Facilities
          </div>

          {/* Main heading */}
          <h1 className="font-black tracking-tight leading-[1.05] text-white uppercase" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            WORLD-CLASS FACILITIES<br />
            <span style={{ color: GREEN }}>FOR THE PERFECT GAME.</span>
          </h1>

          <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed font-medium max-w-md">
            We provide everything you need for an unforgettable football experience.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-2 text-[11px] font-semibold text-slate-400">
            <button onClick={() => setActiveTab('Home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: GREEN }}>Facilities</span>
          </div>
        </div>

        {/* Feature bar */}
        <div className="relative z-10 grid grid-cols-4 gap-0 px-6 sm:px-10 md:px-14 py-4 border-t"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.08)' }}>
          {subFeatures.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center gap-1 text-center">
              <Icon className="w-4 h-4 mb-0.5" style={{ color: GREEN }} />
              <p className="text-[11px] font-black text-white leading-none">{title}</p>
              <p className="text-[9px] text-slate-400 font-semibold">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          PREMIUM FACILITIES SECTION
      ════════════════════════════════════════ */}
      <section className="px-5 lg:px-8 py-10" style={{ background: BG }}>
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">OUR PREMIUM FACILITIES</h2>
          <div className="w-16 h-0.5 mx-auto mt-2 mb-3 rounded" style={{ background: GREEN }}></div>
          <p className="text-[12px] text-slate-400 font-semibold max-w-md mx-auto">
            Top-notch amenities to ensure the best experience for players and visitors.
          </p>
        </div>

        {/* ── DESKTOP GRID (hidden on mobile) ── */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.title}
                className="rounded-xl overflow-hidden flex flex-col transition-all hover:border-emerald-800/50 group"
                style={{ background: CARD, border: `1px solid ${BORD}` }}
              >
                {/* Card image */}
                <div className="relative w-full h-36 overflow-hidden">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,20,12,0.9) 0%, rgba(0,0,0,0.2) 100%)' }} />
                  {/* Overlapping green circle icon */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg"
                    style={{ background: GREEN, borderColor: CARD }}>
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>
                {/* Card content */}
                <div className="px-3 pt-7 pb-4 flex flex-col gap-1 text-center">
                  <h3 className="font-extrabold text-[12px] text-white leading-snug">{fac.title}</h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MOBILE LIST (hidden on desktop) ── */}
        <div className="md:hidden space-y-3">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.title}
                className="flex items-center gap-3 rounded-xl p-3 border transition-all"
                style={{ background: CARD, borderColor: BORD }}
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Green icon circle */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border"
                  style={{ background: `${GREEN}18`, borderColor: `${GREEN}50` }}>
                  <Icon className="w-4 h-4" style={{ color: GREEN }} />
                </div>

                {/* Text */}
                <div className="flex-grow min-w-0">
                  <h3 className="font-extrabold text-[12px] text-white leading-tight">{fac.title}</h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-snug mt-0.5 line-clamp-2">{fac.desc}</p>
                </div>

                {/* Right arrow */}
                <ChevronRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════
          BOTTOM CTA BANNER
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-10 md:px-14 py-10 sm:py-14"
        style={{ background: CARD2 }}
      >
        {/* Subtle green glow blob */}
        <div className="absolute left-[-10%] top-[-80%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: `${GREEN}0A`, filter: 'blur(80px)' }} />

        {/* Text content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3 text-[10px] font-black uppercase tracking-widest" style={{ color: GREEN }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }}></span>
            Experience the Difference
          </div>
          <h2 className="font-black text-white uppercase leading-none" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            BUILT FOR PLAYERS.<br />
            <span style={{ color: GREEN }}>DESIGNED FOR CHAMPIONS.</span>
          </h2>
        </div>

        {/* Right side: button + soccer ball */}
        <div className="relative z-10 flex items-center gap-6 flex-shrink-0">
          <button
            onClick={() => {
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-[13px] font-black text-black transition-all hover:opacity-90 cursor-pointer"
            style={{ background: GREEN }}
          >
            <Calendar className="w-4 h-4" /> Book a Turf
          </button>

          {/* Soccer ball */}
          <div className="w-14 h-14 rounded-full bg-white shadow-2xl overflow-hidden flex-shrink-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="white" stroke="#111" strokeWidth="2"/>
              <polygon points="50,28 66,42 60,62 40,62 34,42" fill="#111"/>
              <polygon points="50,0 38,14 62,14" fill="#111"/>
              <polygon points="8,33 0,46 10,56" fill="#111"/>
              <polygon points="92,33 100,46 90,56" fill="#111"/>
              <polygon points="28,92 18,100 42,100" fill="#111"/>
              <polygon points="72,92 82,100 58,100" fill="#111"/>
              <path d="M50,28 L50,14 M66,42 L82,35 M60,62 L74,76 M40,62 L26,76 M34,42 L18,35" stroke="#111" strokeWidth="2.5" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

    </div>
  );
}

function GalleryView({ setActiveTab }) {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  
  const categories = [
    'All Photos', 'Turf Fields', 'Indoor Turf', 'Night View', 'Amenities', 'Events'
  ];

  const photos = [
    { cat: 'Night View', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80' },
    { cat: 'Turf Fields', img: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&q=80' },
    { cat: 'Night View', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80' },
    { cat: 'Amenities', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' }, // lounge
    { cat: 'Amenities', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80' }, // locker room
    { cat: 'Amenities', img: 'https://images.unsplash.com/photo-1506521788723-868114856b3e?w=800&q=80' }, // parking
    { cat: 'Amenities', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80' }, // cafe
    { cat: 'Turf Fields', img: 'https://images.unsplash.com/photo-1624880357913-a8539238165b?w=800&q=80' }, // soccer ball
    { cat: 'Amenities', img: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80' }, // water bottle
  ];

  const filteredPhotos = activeCategory === 'All Photos' 
    ? photos 
    : photos.filter(p => p.cat === activeCategory);

  return (
    <div className="space-y-0 animate-fade-in -mx-5 lg:-mx-8">
      {/* ════════════════════════════════════════
          GALLERY HERO
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col border-b"
        style={{
          minHeight: 280,
          backgroundImage: "url('/turf_night_view.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          borderColor: BORD
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%)' }} />
        
        <div className="relative z-10 flex-grow px-6 sm:px-10 md:px-14 py-12 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1 h-10 rounded-full" style={{ background: GREEN }}></div>
            <h1 className="font-black tracking-tight leading-none text-white uppercase text-4xl sm:text-5xl">
              GALLERY
            </h1>
          </div>
          
          <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-400 pl-4">
            <button onClick={() => setActiveTab('Home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: GREEN }}>Gallery</span>
          </div>

          <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-medium max-w-lg mt-2 pl-4">
            Explore our world-class turfs, premium facilities, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FILTER TABS & GRID
      ════════════════════════════════════════ */}
      <div className="px-5 lg:px-8 py-8" style={{ background: BG }}>
        {/* Scrollable Filters */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 mb-6 -mx-5 px-5 lg:mx-0 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-lg text-[13px] font-bold whitespace-nowrap transition-all border"
              style={{
                background: activeCategory === cat ? `${GREEN}15` : CARD,
                borderColor: activeCategory === cat ? GREEN : BORD,
                color: activeCategory === cat ? GREEN : '#94a3b8'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════
            PHOTO GRID
        ════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filteredPhotos.map((photo, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-video border group cursor-pointer" style={{ borderColor: BORD, background: CARD }}>
              <img src={photo.img} alt={photo.cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-10 mb-4 flex justify-center">
          {/* Hidden on mobile, shown on desktop as outline */}
          <button 
            onClick={() => {
              setActiveTab('Home');
              setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="hidden md:flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-[13px] font-black transition-all hover:opacity-90 cursor-pointer border-2"
            style={{ 
              borderColor: GREEN, 
              color: GREEN,
              background: 'transparent'
            }}
          >
            BOOK YOUR TURF NOW <Calendar className="w-4 h-4 ml-1" />
          </button>

          {/* Shown on mobile, hidden on desktop as solid */}
          <button 
            onClick={() => {
              setActiveTab('Home');
              setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="md:hidden w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-[13px] font-black transition-all hover:opacity-90 cursor-pointer"
            style={{ background: GREEN, color: '#000' }}
          >
            BOOK YOUR TURF NOW <Calendar className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          BOTTOM FEATURES BAR
      ════════════════════════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-10 md:px-14 py-10 border-t" style={{ background: CARD2, borderColor: BORD }}>
        {[
          { icon: ShieldCheck, title: 'Premium Quality', desc: 'World-class turfs for the best game.' },
          { icon: Shield, title: '100% Safe & Secure', desc: 'Your safety is our top priority.' },
          { icon: Star, title: 'Well Maintained', desc: 'Regularly maintained for perfect play.' },
          { icon: Headphones, title: '24/7 Support', desc: "We're here to help you anytime." },
        ].map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="flex gap-4 items-start">
              <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: GREEN }} />
              <div>
                <h3 className="font-extrabold text-[13px] text-white leading-tight mb-1">{feat.title}</h3>
                <p className="text-[11px] text-slate-400 font-medium leading-snug">{feat.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}

function PricingView({ setActiveTab }) {
  const [billingCycle, setBillingCycle] = useState('hourly');

  const pricingPlans = [
    {
      name: "BASIC TURF",
      price: "700",
      desc: "Perfect for casual games",
      icon: Footprints,
      isPopular: false,
      features: ["Standard Turf", "Upto 10 Players", "Basic Lighting", "Parking", "Changing Rooms"],
      mobileFeatures: [
        { icon: Users, text: "Upto 10 Players" },
        { icon: Flame, text: "Basic Lighting" },
        { icon: Car, text: "Parking" },
        { icon: Shirt, text: "Changing Rooms" },
      ]
    },
    {
      name: "PREMIUM TURF",
      price: "1,000",
      desc: "Best for regular players",
      icon: Trophy,
      isPopular: false,
      features: ["Premium Turf", "Upto 14 Players", "Bright Flood Lights", "Parking", "Changing Rooms", "Drinking Water"],
      mobileFeatures: [
        { icon: Users, text: "Upto 14 Players" },
        { icon: Flame, text: "Bright Lights" },
        { icon: Car, text: "Parking" },
        { icon: Shirt, text: "Changing Rooms" },
        { icon: Droplets, text: "Drinking Water" },
      ]
    },
    {
      name: "ELITE TURF",
      price: "1,500",
      desc: "For serious football lovers",
      icon: Star,
      isPopular: true,
      features: ["FIFA Quality Turf", "Upto 18 Players", "High Mast Lights", "Parking", "Changing Rooms", "Drinking Water", "Referee (On Request)"],
      mobileFeatures: [
        { icon: Users, text: "Upto 18 Players" },
        { icon: Flame, text: "High Mast Lights" },
        { icon: Car, text: "Parking" },
        { icon: Shirt, text: "Changing Rooms" },
        { icon: Plus, text: "More" },
      ]
    },
    {
      name: "VIP TURF",
      price: "2,000",
      desc: "The ultimate experience",
      icon: Diamond,
      isPopular: false,
      features: ["FIFA Quality Turf", "Upto 22 Players", "High Mast Lights", "Premium Parking", "AC Changing Rooms", "Drinking Water", "Referee (On Request)"],
      mobileFeatures: [
        { icon: Users, text: "Upto 22 Players" },
        { icon: Wind, text: "AC Rooms" },
        { icon: Car, text: "Premium Parking" },
        { icon: Droplets, text: "Drinking Water" },
        { icon: Plus, text: "More" },
      ]
    }
  ];

  const faqs = [
    { q: "Can I cancel my booking?", a: "Yes, cancellations are allowed up to 24 hours before your slot." },
    { q: "Can I reschedule my booking?", a: "Rescheduling is subject to availability and must be done 12 hours prior." },
    { q: "Is advance payment required?", a: "Yes, a 50% advance payment is required to confirm your booking." },
    { q: "Do you provide equipment?", a: "We provide basic equipment like bibs and balls on request." },
  ];

  return (
    <div className="space-y-0 animate-fade-in -mx-5 lg:-mx-8">
      {/* ════════════════════════════════════════
          PRICING HERO
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col border-b"
        style={{
          minHeight: 280,
          backgroundImage: "url('/turf_night_view.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderColor: BORD
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)' }} />
        
        <div className="relative z-10 flex-grow px-6 sm:px-10 md:px-14 py-12 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-[2px] rounded-full" style={{ background: GREEN }}></span>
            <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: GREEN }}>PRICING PLANS</span>
          </div>
          
          <h1 className="font-black tracking-tight leading-none text-white uppercase text-3xl sm:text-4xl md:text-5xl mt-2">
            SIMPLE PRICING.<br />
            <span style={{ color: GREEN }}>PREMIUM EXPERIENCE.</span>
          </h1>
          
          <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed font-medium max-w-lg mt-3">
            Choose the perfect plan for your game.<br />
            Affordable pricing for world-class turfs.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRICING CONTENT (Cards & Toggle)
      ════════════════════════════════════════ */}
      <div className="px-5 lg:px-8 py-10" style={{ background: BG }}>
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 rounded-xl border" style={{ background: CARD, borderColor: BORD }}>
            <button
              onClick={() => setBillingCycle('hourly')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-[12px] font-bold transition-all"
              style={billingCycle === 'hourly' 
                ? { background: `${GREEN}15`, color: GREEN, border: `1px solid ${GREEN}40` } 
                : { color: '#94a3b8', border: '1px solid transparent' }}
            >
              <Calendar className="w-4 h-4" /> Hourly Booking
            </button>
            <button
              onClick={() => setBillingCycle('membership')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-[12px] font-bold transition-all"
              style={billingCycle === 'membership' 
                ? { background: `${GREEN}15`, color: GREEN, border: `1px solid ${GREEN}40` } 
                : { color: '#94a3b8', border: '1px solid transparent' }}
            >
              <Users className="w-4 h-4" /> Membership Plans
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div 
                key={idx} 
                className="relative rounded-2xl p-6 flex flex-col transition-transform hover:-translate-y-2"
                style={{ 
                  background: CARD, 
                  border: plan.isPopular ? `2px solid ${GREEN}` : `1px solid ${BORD}`,
                  boxShadow: plan.isPopular ? `0 0 25px ${GREEN}15` : 'none',
                  marginTop: plan.isPopular ? '-10px' : '0'
                }}
              >
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-lg text-[10px] font-black text-black uppercase tracking-wider"
                    style={{ background: GREEN }}>
                    MOST POPULAR
                  </div>
                )}

                {/* Card Header */}
                <Icon className="w-7 h-7 mb-4" style={{ color: GREEN }} />
                <h3 className="font-black text-[15px] text-white uppercase tracking-wide">{plan.name}</h3>
                <p className="text-[11px] text-slate-400 font-medium mt-1">{plan.desc}</p>
                
                <div className="flex items-end gap-1 my-5">
                  <span className="font-black text-3xl leading-none" style={{ color: GREEN }}>₹{plan.price}</span>
                  <span className="text-[11px] text-slate-400 font-bold mb-1">/ hour</span>
                </div>

                {/* Desktop Features List */}
                <div className="hidden md:flex flex-col gap-3 flex-grow mb-8 border-t pt-5" style={{ borderColor: BORD }}>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: GREEN }} />
                      <span className="text-[12px] font-medium text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Features Grid */}
                <div className="flex md:hidden grid grid-cols-2 gap-3 mb-6 border-t pt-5" style={{ borderColor: BORD }}>
                  {plan.mobileFeatures.map((feat, i) => {
                    const FIcon = feat.icon;
                    return (
                      <div key={i} className="flex flex-col items-center justify-center text-center p-2 rounded-lg" style={{ background: `${BG}` }}>
                        <FIcon className="w-4 h-4 mb-1.5" style={{ color: '#fbbf24' }} /> {/* Yellowish icons like in mockup */}
                        <span className="text-[9px] font-bold text-slate-400 leading-tight">{feat.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Card Button */}
                <button 
                  onClick={() => {
                    setActiveTab('Home');
                    setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="w-full py-3 rounded-lg text-[12px] font-black flex items-center justify-center gap-2 mt-auto transition-all cursor-pointer"
                  style={plan.isPopular 
                    ? { background: GREEN, color: '#000' }
                    : { background: 'transparent', border: `1px solid ${GREEN}`, color: GREEN }}
                >
                  BOOK NOW <Calendar className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* ════════════════════════════════════════
          BOTTOM FEATURES BAR
      ════════════════════════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 px-6 sm:px-10 md:px-14 py-8 border-t border-b" style={{ background: CARD2, borderColor: BORD }}>
        {[
          { icon: ShieldCheck, title: '100% Safe & Secure', desc: 'Your safety is our top priority.' },
          { icon: Headphones, title: '24/7 Support', desc: "We're here to help you anytime." },
          { icon: Calendar, title: 'Easy Booking', desc: 'Book your slot in just a few clicks.' },
          { icon: IndianRupee, title: 'No Hidden Charges', desc: 'What you see is what you pay.' },
          { icon: Star, title: 'Best Facilities', desc: 'Experience world-class amenities.' },
        ].map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="flex flex-col md:flex-row gap-3 items-center md:items-start text-center md:text-left">
              <Icon className="w-6 h-6 flex-shrink-0" style={{ color: GREEN }} />
              <div>
                <h3 className="font-extrabold text-[12px] text-white leading-tight mb-1">{feat.title}</h3>
                <p className="text-[10px] text-slate-400 font-medium leading-snug">{feat.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════ */}
      <section className="px-5 lg:px-8 py-12 pb-24" style={{ background: BG }}>
        <div className="flex items-center justify-center gap-4 mb-10 max-w-3xl mx-auto">
          <div className="h-[1px] flex-grow" style={{ background: `linear-gradient(to right, transparent, ${BORD})` }}></div>
          <h2 className="font-black text-[16px] text-white uppercase tracking-widest text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-[1px] flex-grow" style={{ background: `linear-gradient(to left, transparent, ${BORD})` }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-xl border cursor-pointer hover:bg-slate-900/50 transition-colors"
              style={{ background: CARD, borderColor: BORD }}>
              <span className="text-[13px] font-bold text-slate-300">{faq.q}</span>
              <Plus className="w-4 h-4 text-slate-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Sticky Book Now Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-40 border-t" style={{ background: `${BG}F0`, backdropFilter: 'blur(10px)', borderColor: BORD }}>
        <button 
          onClick={() => {
            setActiveTab('Home');
            setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100);
          }}
          className="w-full py-3.5 rounded-lg text-[13px] font-black flex items-center justify-center gap-2 transition-all cursor-pointer"
          style={{ background: GREEN, color: '#000' }}
        >
          BOOK YOUR TURF NOW <Calendar className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}


export default function App() {
  const [activeTab, setActiveTab] = useState('About Us');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slots = [
    { time: "6:00 AM – 7:00 AM",   available: true  },
    { time: "7:00 AM – 8:00 AM",   available: false },
    { time: "8:00 AM – 9:00 AM",   available: true  },
    { time: "9:00 AM – 10:00 AM",  available: true  },
    { time: "10:00 AM – 11:00 AM", available: false },
    { time: "11:00 AM – 12:00 PM", available: true  },
  ];

  const testimonials = [
    { name: "Arun Kumar",    role: "Regular Player",  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",  comment: "Best turf in town! The turf quality and lighting are simply amazing." },
    { name: "Vignesh R",     role: "Football Player", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", comment: "Well maintained, clean and perfect for night matches." },
    { name: "Karthik Selvam",role: "Team Captain",    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150", comment: "Great experience every time. Highly recommended for all football lovers!" },
    { name: "Surya Prakash", role: "Weekend Player",  avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150", comment: "Ample parking and good facilities. Will definitely come back!" },
  ];

  const tournaments = [
    { tag: "FOOTBALL", title: "Turf Champions League",  dates: "25 May – 05 Jun 2026", left: "5 Days Left"  },
    { tag: "FOOTBALL", title: "Night Football Cup",      dates: "10 Jun – 18 Jun 2026", left: "21 Days Left" },
    { tag: "CRICKET",  title: "Turf Cricket Tournament", dates: "01 Jul – 07 Jul 2026", left: "42 Days Left" },
  ];

  const handleSlot = (i, s) => {
    if (!s.available) return;
    setSelectedSlot(i);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div style={{ background: BG }} className="min-h-screen text-slate-100 flex flex-col font-sans antialiased pb-16 md:pb-0">

      {/* ── SUCCESS TOAST ── */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border animate-fade-in-down"
          style={{ background: '#091409', borderColor: BORD }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-sm" style={{ background: '#1a3320', color: GREEN }}>✓</div>
          <div>
            <p className="font-extrabold text-sm text-white">Slot Selected!</p>
            <p className="text-[11px] text-slate-400">{slots[selectedSlot]?.time}</p>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════
          HEADER
      ════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b" style={{ background: `${BG}f0`, borderColor: BORD, backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between gap-6">

          {/* Logo */}
          <span 
            onClick={() => setActiveTab('Home')}
            className="font-black text-2xl tracking-tight cursor-pointer" 
            style={{ color: GREEN }}>
            TURF
          </span>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-400">
            {['Home','About Us','Facilities','Book Now','Gallery','Pricing','Contact'].map((n) => (
              <button 
                key={n} 
                onClick={() => setActiveTab(n)}
                className="transition-colors hover:text-white relative cursor-pointer font-semibold"
                style={activeTab === n ? { color: GREEN } : {}}>
                {n}
                {activeTab === n && <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full" style={{ background: GREEN }} />}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-slate-300 hover:text-white">
              <Phone className="w-3.5 h-3.5" style={{ color: GREEN }} />
              +91 98765 43210
            </a>
            <button 
              onClick={() => {
                setActiveTab('Home');
                setTimeout(() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-black text-black transition-all hover:opacity-90 cursor-pointer"
              style={{ background: GREEN }}>
              <Calendar className="w-3.5 h-3.5" /> Book Now
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-slate-400">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t px-5 py-4 space-y-1" style={{ background: BG, borderColor: BORD }}>
            {['Home','About Us','Facilities','Book Now','Gallery','Pricing','Contact'].map((n) => (
              <button 
                key={n} 
                onClick={() => { 
                  setActiveTab(n); 
                  setMobileMenuOpen(false); 
                  if (n === 'Book Now') {
                    setActiveTab('Home');
                    setTimeout(() => {
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="block w-full text-left py-2.5 px-3 rounded-lg text-[13px] font-bold transition-colors cursor-pointer"
                style={activeTab === n ? { background: `${GREEN}18`, color: GREEN, borderLeft: `3px solid ${GREEN}` } : { color: '#94a3b8' }}>
                {n}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className={activeTab === 'Facilities' || activeTab === 'Gallery' || activeTab === 'Pricing' ? 'max-w-7xl w-full mx-auto py-7 space-y-0 overflow-hidden' : 'max-w-7xl w-full mx-auto px-5 lg:px-8 py-7 space-y-8'}>
        {activeTab === 'About Us' ? (
          <AboutUsView setActiveTab={setActiveTab} />
        ) : activeTab === 'Facilities' ? (
          <FacilitiesView setActiveTab={setActiveTab} />
        ) : activeTab === 'Gallery' ? (
          <GalleryView setActiveTab={setActiveTab} />
        ) : activeTab === 'Pricing' ? (
          <PricingView setActiveTab={setActiveTab} />
        ) : (
          <>
            {/* ════════════════════════════════════════
                HERO BANNER
            ════════════════════════════════════════ */}
        <section className="relative rounded-2xl overflow-hidden flex flex-col border" style={{ minHeight: 420, borderColor: BORD, backgroundImage: "url('/turf_night_view.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

          {/* Left-to-right dark fade so text is readable on left, field visible on right */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #060a06 0%, #060a06 30%, rgba(6,10,6,0.82) 52%, rgba(6,10,6,0.35) 72%, rgba(6,10,6,0.05) 100%)' }} />
          {/* Bottom fade for features bar */}
          <div className="absolute bottom-0 inset-x-0 h-20" style={{ background: 'linear-gradient(to top, rgba(6,10,6,0.98), transparent)' }} />

          {/* Google Rating — right side, vertically centred */}
          <div className="absolute right-5 sm:right-10 top-1/2 -translate-y-8 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-sm font-black text-blue-600 flex-shrink-0">G</span>
            <div>
              <div className="flex items-center gap-1 text-sm font-black text-white leading-none">
                4.9 / 5 <span className="text-yellow-400 text-xs ml-1">★★★★★</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Google Rating</p>
            </div>
          </div>

          {/* Hero text — upper left */}
          <div className="relative z-10 flex-grow px-7 sm:px-10 md:px-14 pt-10 sm:pt-14 pb-5 flex flex-col justify-start gap-4 max-w-xl">
            <div>
              <h1 className="font-black tracking-tight leading-none text-white uppercase" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
                PLAY MORE.<br />
                LIVE <span style={{ color: GREEN }}>THE GAME.</span>
              </h1>
              <p className="mt-3 text-[14px] text-slate-300 leading-snug font-medium">
                Premium turf experience for football lovers.<br />
                Book, play and enjoy with your squad.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <a href="#booking" className="flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-black text-black transition-all hover:opacity-90"
                style={{ background: GREEN }}>
                <Calendar className="w-4 h-4" /> Book a Turf
              </a>
              <a href="#facilities" className="px-5 py-3 rounded-lg text-[13px] font-black text-white border transition-all hover:bg-white/10"
                style={{ background: 'rgba(0,0,0,0.45)', borderColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                Explore Facilities
              </a>
            </div>
          </div>

          {/* Features bar — bottom strip */}
          <div className="relative z-10 mt-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-7 sm:px-10 md:px-14 py-4 border-t" style={{ background: 'rgba(6,10,6,0.75)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.06)' }}>
            {[
              { icon: Shield,   title: 'Premium Turf',   sub: 'Best quality synthetic grass' },
              { icon: Flame,    title: 'Flood Lights',   sub: 'Night play experience' },
              { icon: Calendar, title: 'Secure Booking', sub: 'Easy & Quick booking' },
              { icon: Sparkles, title: 'Clean & Safe',   sub: 'Hygienic environment' },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}30` }}>
                  <Icon className="w-4 h-4" style={{ color: GREEN }} />
                </div>
                <div>
                  <p className="text-[12px] font-black text-white">{title}</p>
                  <p className="text-[10px] text-slate-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ════════════════════════════════════════
            LIVE SLOT AVAILABILITY
        ════════════════════════════════════════ */}
        <section id="booking" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-[15px] font-extrabold uppercase tracking-widest text-white">Live Slot Availability</h2>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border" style={{ background: `${GREEN}12`, borderColor: `${GREEN}35`, color: GREEN }}>
                <span className="w-1.5 h-1.5 rounded-full animate-ping inline-block" style={{ background: GREEN }} />
                Real-time updates
              </span>
            </div>
            <button className="flex items-center gap-1.5 text-[11px] font-black uppercase px-3.5 py-2 rounded-lg border transition-all" style={{ color: GREEN, borderColor: `${GREEN}40`, background: `${GREEN}10` }}>
              <Calendar className="w-3 h-3" /> View Full Slots
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {slots.map((s, i) => (
              <button key={i} onClick={() => handleSlot(i, s)}
                className="py-4 px-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all"
                style={{
                  background: s.available ? (selectedSlot === i ? `${GREEN}18` : CARD) : CARD2,
                  borderColor: s.available ? (selectedSlot === i ? GREEN : BORD) : '#2a1a1a',
                  opacity: s.available ? 1 : 0.55,
                  cursor: s.available ? 'pointer' : 'not-allowed',
                }}>
                <span className="text-[10px] font-extrabold text-slate-400 text-center leading-snug">{s.time}</span>
                <div className="flex items-center gap-1">
                  {s.available
                    ? <><div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: `${GREEN}22` }}><Check className="w-2 h-2 stroke-[3]" style={{ color: GREEN }} /></div><span className="text-[11px] font-black" style={{ color: GREEN }}>Available</span></>
                    : <><div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-red-900/30"><X className="w-2 h-2 stroke-[3] text-red-400" /></div><span className="text-[11px] font-black text-red-400">Booked</span></>
                  }
                </div>
              </button>
            ))}
          </div>
        </section>


        {/* ════════════════════════════════════════
            FEEL THE GAME  +  TOURNAMENTS
        ════════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left — video card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border relative flex flex-col justify-end p-6 sm:p-8 min-h-[300px]" style={{ borderColor: BORD, backgroundImage: "url('https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=900')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #060a06 0%, rgba(6,10,6,0.80) 50%, rgba(6,10,6,0.10) 100%)' }} />
            <div className="relative z-10 space-y-3 max-w-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border" style={{ color: GREEN, borderColor: `${GREEN}35`, background: `${GREEN}12` }}>
                <Eye className="w-3 h-3" /> Experience The Turf
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase leading-tight">
                Feel the <span style={{ color: GREEN }}>game</span><br />before you play.
              </h3>
              <p className="text-[13px] text-slate-400 leading-relaxed">Take a look at our world-class turf, facilities, and the vibe that makes every game special.</p>
              <button onClick={() => alert('Video tour loading...')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[12px] font-black uppercase border transition-all group"
                style={{ color: GREEN, borderColor: `${GREEN}40`, background: `${GREEN}12` }}>
                <Play className="w-3.5 h-3.5 fill-current" /> Watch Video
              </button>
            </div>
          </div>

          {/* Right — tournaments */}
          <div className="lg:col-span-5 rounded-2xl border p-6 sm:p-7 flex flex-col gap-4" style={{ background: CARD, borderColor: BORD }}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[14px] font-extrabold text-white uppercase tracking-wider">Upcoming Tournaments</h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Don't miss out. Register your team now!</p>
              </div>
              <button className="flex-shrink-0 px-4 py-2 rounded-lg text-[11px] font-black uppercase text-black" style={{ background: GREEN }}>View All</button>
            </div>

            <div className="space-y-3 flex-grow">
              {tournaments.map((t, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border transition-all hover:border-opacity-60" style={{ background: CARD2, borderColor: BORD }}>
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border" style={{ color: GREEN, borderColor: `${GREEN}40`, background: `${GREEN}12` }}>{t.tag}</span>
                    <div>
                      <p className="text-[12px] font-extrabold text-white">{t.title}</p>
                      <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5"><Clock className="w-2.5 h-2.5" style={{ color: GREEN }} />{t.dates}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-black px-2.5 py-1 rounded-full border flex-shrink-0" style={{ color: GREEN, borderColor: `${GREEN}40`, background: `${GREEN}12` }}>{t.left}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════════════════════════════════════
            WHY CHOOSE US  /  TESTIMONIALS  /  STATS
        ════════════════════════════════════════ */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* WHY CHOOSE US */}
          <div className="rounded-2xl border p-6 flex flex-col gap-5" style={{ background: CARD, borderColor: BORD }}>
            <div>
              <h3 className="text-[13px] font-extrabold text-white uppercase tracking-widest flex items-center gap-2">
                Why Choose Us? <span className="h-px flex-grow" style={{ background: `${GREEN}60` }} />
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {[
                { icon: Shield,   title: 'FIFA Quality Turf',   sub: 'International standard synthetic turf' },
                { icon: Flame,    title: 'Bright Flood Lights', sub: 'Perfect visibility for night games' },
                { icon: MapPin,   title: 'Ample Parking',       sub: 'Spacious and secure parking area' },
                { icon: Sparkles, title: 'Clean Washrooms',     sub: 'Hygienic and well-maintained' },
                { icon: Users,    title: 'Drinking Water',      sub: 'Clean and safe drinking water' },
                { icon: Award,    title: 'CCTV Security',       sub: '24/7 surveillance for your safety' },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="space-y-1">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30` }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: GREEN }} />
                  </div>
                  <p className="text-[11px] font-extrabold text-white">{title}</p>
                  <p className="text-[9px] text-slate-500 leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT PLAYERS SAY */}
          <div className="rounded-2xl border p-6 flex flex-col gap-4" style={{ background: CARD, borderColor: BORD }}>
            <h3 className="text-[13px] font-extrabold text-white uppercase tracking-widest flex items-center gap-2">
              What Players Say <span className="h-px flex-grow" style={{ background: `${GREEN}60` }} />
            </h3>
            <div className="space-y-3 flex-grow">
              {testimonials.slice(0, 2).map((t, i) => (
                <div key={i} className="p-3.5 rounded-xl border space-y-2" style={{ background: CARD2, borderColor: BORD }}>
                  <div className="flex items-center gap-2.5">
                    <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border" style={{ borderColor: `${GREEN}40` }} />
                    <div>
                      <p className="text-[12px] font-extrabold text-white">{t.name}</p>
                      <p className="text-[10px] text-slate-500">{t.role}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 text-[11px]">★★★★★</div>
                  </div>
                  <p className="text-[11px] text-slate-300 italic leading-relaxed">"{t.comment}"</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="w-5 h-1.5 rounded-full" style={{ background: GREEN }} />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
          </div>

          {/* OUR STATS */}
          <div className="rounded-2xl border p-6 flex flex-col gap-4" style={{ background: CARD, borderColor: BORD }}>
            <h3 className="text-[13px] font-extrabold text-white uppercase tracking-widest flex items-center gap-2">
              Our Stats <span className="h-px flex-grow" style={{ background: `${GREEN}60` }} />
            </h3>
            <div className="flex-grow space-y-3">
              {[
                { val: '50+',  label: 'Turfs',              sub: 'Available' },
                { val: '10K+', label: 'Happy Players',      sub: 'Active Monthly', hi: true },
                { val: '500+', label: 'Matches Played',     sub: 'Completed' },
                { val: '5+',   label: 'Years of Excellence',sub: 'Established' },
                { val: '4.9★', label: 'Average Rating',     sub: 'Google', hi: true },
              ].map(({ val, label, sub, hi }) => (
                <div key={label} className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: BORD }}>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black" style={{ background: `${GREEN}15`, color: GREEN }}>{val}</div>
                    <span className="text-[12px] font-bold text-slate-400">{label}</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase" style={{ color: hi ? GREEN : '#64748b' }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════════════════════════════════════
            READY TO PLAY CTA
        ════════════════════════════════════════ */}
        <section className="rounded-2xl border overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12" style={{ background: DKGRN, borderColor: '#2a4a2a' }}>
          <div className="absolute top-[-60%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: `${GREEN}08`, filter: 'blur(100px)' }} />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}35` }}>
              <Calendar className="w-7 h-7" style={{ color: GREEN }} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Ready to Play?</h2>
              <p className="text-[13px] text-slate-300 mt-0.5">Book your slot now and experience the best turf in town.</p>
            </div>
          </div>

          <div className="flex items-center gap-5 relative z-10 flex-shrink-0">
            <a href="#booking" className="px-8 py-3.5 rounded-xl text-[13px] font-black text-black flex items-center gap-2 transition-all hover:opacity-90"
              style={{ background: GREEN }}>
              <Calendar className="w-4 h-4" /> Book a Turf
            </a>

            {/* Soccer ball */}
            <div className="w-16 h-16 rounded-full bg-white shadow-2xl overflow-hidden flex-shrink-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill="white" stroke="#111" strokeWidth="2"/>
                <polygon points="50,28 66,42 60,62 40,62 34,42" fill="#111"/>
                <polygon points="50,0 38,14 62,14" fill="#111"/>
                <polygon points="8,33 0,46 10,56" fill="#111"/>
                <polygon points="92,33 100,46 90,56" fill="#111"/>
                <polygon points="28,92 18,100 42,100" fill="#111"/>
                <polygon points="72,92 82,100 58,100" fill="#111"/>
                <path d="M50,28 L50,14 M66,42 L82,35 M60,62 L74,76 M40,62 L26,76 M34,42 L18,35" stroke="#111" strokeWidth="2.5" fill="none"/>
              </svg>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110"
              style={{ background: '#25d366', boxShadow: '0 0 20px #25d36640' }}>
              <MessageSquare className="w-6 h-6 text-white fill-current" />
            </a>
          </div>
        </section>
          </>
        )}
      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="border-t mt-8 py-7 text-[12px] text-slate-500" style={{ background: BG, borderColor: BORD }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base">TURF</span>
            <span>&copy; 2026 Turf Arena. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5 font-semibold uppercase tracking-wider text-[10px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* ════════════════════════════════════════
          MOBILE BOTTOM NAV  (phone view only)
      ════════════════════════════════════════ */}
      <div className="md:hidden fixed bottom-0 inset-x-0 h-16 grid grid-cols-3 z-50 border-t" style={{ borderColor: BORD }}>
        <a href="tel:+919876543210" className="flex flex-col items-center justify-center gap-0.5 text-slate-400" style={{ background: '#080e08' }}>
          <Phone className="w-4.5 h-4.5" style={{ color: GREEN }} />
          <span className="text-[9px] font-black uppercase tracking-wider">Call Now</span>
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-white" style={{ background: '#25d366' }}>
          <MessageSquare className="w-4.5 h-4.5 fill-current" />
          <span className="text-[9px] font-black uppercase tracking-wider">WhatsApp</span>
        </a>
        <a href="#booking" className="flex flex-col items-center justify-center gap-0.5" style={{ background: '#0f2618' }}>
          <Calendar className="w-4.5 h-4.5" style={{ color: GREEN }} />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: GREEN }}>Book a Turf</span>
        </a>
      </div>

    </div>
  );
}
