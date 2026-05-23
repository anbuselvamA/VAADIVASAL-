"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import { Calendar, Award, Flame, Car, Droplets, Shield, MapPin, Play, Phone, Mail, Send, CheckCircle2, Star, Users, Wind, Trophy, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const [faqLang, setFaqLang] = useState<'en' | 'ta'>('en');

  const pricingPlans = [
    {
      name: "BASIC TURF",
      price: "₹700",
      desc: "Perfect for casual games",
      features: ["Standard Turf", "Upto 10 Players", "Basic Lighting", "Parking"],
      popular: false,
    },
    {
      name: "ELITE TURF",
      price: "₹1,500",
      desc: "For serious football lovers",
      features: ["FIFA Quality Turf", "Upto 18 Players", "High Mast Lights", "Referee (On Request)"],
      popular: true,
    },
    {
      name: "VIP TURF",
      price: "₹2,000",
      desc: "The ultimate experience",
      features: ["FIFA Quality Turf", "Upto 22 Players", "AC Changing Rooms", "Premium Parking"],
      popular: false,
    }
  ];

  const galleryImages = [
    "/turf_night_view.png", // Local night view
    "/facilities_hero.png", // Local facilities view
    "/about_hero.png", // Local about view
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800", // Football on turf
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=800", // Wide Pitch
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800"  // Night Football
  ];

  const testimonials = [
    {
      quote: "The best turf experience in the city. The grass quality is exceptional and the lighting makes night matches feel like professional games.",
      name: "Rahul M.",
      designation: "Regular Player",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    },
    {
      quote: "Booking is seamless and the facilities are top-notch. The management really cares about maintaining the standard.",
      name: "Sanjay Kumar",
      designation: "Amateur League Captain",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-[#060a06] text-slate-100 font-sans selection:bg-white/30 relative">
      
      {/* ── ANNOUNCEMENT BANNER ── */}
      <div className="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-2 px-4 text-center z-[60] relative">
        <span className="inline-block animate-bounce mr-2">🔥</span> 
        Special Weekend Offer: Flat 10% off on all midnight slots! Use Code: NIGHTOWL
      </div>

      {/* ── SHARED NAVBAR ── */}
      <Navbar />

      {/* ── HOME / HERO SECTION ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Full Screen Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/turf_night_view.png"
            alt="Cinematic Turf Background"
            fill
            className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            priority
          />
          {/* Intense Black Overlays for Cinematic Depth */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a06] via-[#060a06]/20 to-[#060a06]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#060a06_100%)] opacity-80" />
        </div>
        
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(16, 185, 129, 0.4)" />
        <BackgroundBeams />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10b981]/50 bg-[#060a06]/50 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-white uppercase">Open 24/7 • Live Booking</span>
            </div>

            {/* Bold Premium Typography */}
            <h2 className="text-emerald-400 text-sm sm:text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
              Virudhachalam’s Finest
            </h2>
            <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black font-heading uppercase tracking-tighter leading-[0.8] text-white drop-shadow-2xl flex flex-col items-center">
              <span>PREMIUM</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-[#10b981] -mt-2 sm:-mt-4">CRICKET</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-emerald-600 -mt-2 sm:-mt-4 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">& FOOTBALL</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed drop-shadow-lg tracking-wide">
              Experience the perfect pitch. <span className="text-white font-bold">Floodlights • Premium Grass • Instant Booking.</span>
            </p>

            {/* Animated CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              {/* Spinning Border Premium Button */}
              <a href="/booking" className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none group shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-shadow duration-500">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#060a06_0%,#10b981_50%,#060a06_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#060a06] px-8 sm:px-12 py-3 text-sm sm:text-base font-black uppercase tracking-widest text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-transparent group-hover:text-black">
                  <Calendar className="w-5 h-5 mr-3" /> Book Instantly
                </span>
              </a>

              {/* Secondary Ghost Button */}
              <a href="/about" className="h-16 px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                <Play className="w-5 h-5" /> Watch Trailer
              </a>
            </div>
            
            {/* Live Stats Panel */}
            <div className="w-full max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl md:text-4xl font-black font-heading text-white flex items-center">
                  <NumberTicker value={50} />K+
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Happy Players</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-l border-white/10">
                <span className="text-3xl md:text-4xl font-black font-heading text-[#10b981] flex items-center gap-1">
                  4.9 <Star className="w-5 h-5 fill-[#10b981]" />
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Google Rating</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-l border-white/10">
                <span className="text-2xl md:text-3xl font-black font-heading text-white">
                  CITY CENTER
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Prime Location</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-l border-white/10">
                <span className="text-2xl md:text-3xl font-black font-heading text-white">
                  24/7
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Opening Timings</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── GALLERY SECTION (Swipeable) ── */}
      <section id="gallery" className="py-24 bg-[#0a120a] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Our Ground</h2>
              <h3 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-tight">The Playing Surface</h3>
            </div>
            <div className="flex gap-2 hidden md:flex">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-zinc-500 block"></span>
                Swipe to explore
              </span>
            </div>
          </div>
        </div>
          
        <div className="w-full px-6 md:px-12">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {galleryImages.map((src, i) => (
              <div 
                key={i}
                className="relative w-[320px] md:w-[600px] aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-black shrink-0 snap-center group"
              >
                {src.startsWith('http') ? (
                  <img src={src} alt={`Turf Ground ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <Image src={src} alt={`Turf Ground ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Facilities Button */}
        <div className="mt-12 flex justify-center">
          <a href="/facilities" className="h-14 px-8 rounded-xl border border-[#10b981]/50 bg-[#10b981]/10 text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#10b981] hover:text-black transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            View All Facilities
          </a>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section id="pricing" className="py-24 relative overflow-hidden bg-[#060a06] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Pricing Plans</h2>
            <h3 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-tight">Choose Your Turf</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative rounded-[2.5rem] p-8 border ${plan.popular ? 'bg-[#0a120a] border-white  md:-translate-y-4' : 'bg-white/5 border-white/10 backdrop-blur-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#060a06] text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-white font-black tracking-wider uppercase mb-2 text-lg">{plan.name}</h4>
                  <p className="text-slate-400 text-sm font-medium">{plan.desc}</p>
                </div>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-xs">/ hour</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="/booking" className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all flex justify-center items-center ${plan.popular ? 'bg-white text-black hover:bg-zinc-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Select Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOURNAMENT HOSTING SECTION ── */}
      <section className="py-24 bg-[#0a120a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-[10px] font-black tracking-widest text-yellow-500 uppercase">Corporate & Local Leagues</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-white uppercase tracking-tight leading-none mb-6">
                HOST YOUR TOURNAMENT WITH US
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                From corporate sports days to high-stakes local football leagues, Vaadivaasal Turf is the perfect venue. We offer end-to-end support including referees, floodlights, seating, and live scoreboard setups.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Dedicated Event Manager", 
                  "Customized Bulk Booking Pricing", 
                  "Trophy & Medal Arrangements", 
                  "HD Video Recording (On Request)"
                ].map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    {perk}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="h-14 px-8 inline-flex rounded-xl bg-white text-[#060a06] font-black text-sm uppercase tracking-wider items-center gap-2 hover:bg-zinc-200 transition-colors">
                Enquire Now <Award className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1518605368461-1ee7c5108f91?q=80&w=1200" 
                alt="Tournament" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a06] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between">
                  <span className="text-white font-black text-2xl font-heading tracking-wider">CHAMPIONSHIP ARENA</span>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (REVIEWS) ── */}
      <section className="py-24 bg-[#060a06] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Player Reviews</h2>
            <h3 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-tight">Hear From Champions</h3>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 bg-[#060a06] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Got Questions?</h2>
            <h3 className="text-5xl md:text-6xl font-black font-heading text-white uppercase tracking-tight mb-8">Frequently Asked</h3>
            
            {/* Language Toggle */}
            <div className="inline-flex bg-[#0a120a] border border-white/10 rounded-xl p-1 mb-6">
              <button 
                onClick={() => setFaqLang('en')}
                className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${faqLang === 'en' ? 'bg-[#10b981] text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => setFaqLang('ta')}
                className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${faqLang === 'ta' ? 'bg-[#10b981] text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Tanglish
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Accordion className="w-full space-y-4">
              {[
                {
                  en: { q: "Do you provide footballs and bibs?", a: "Yes! We provide one high-quality football and standard bibs for your session at no extra cost. Just collect them from the manager's office." },
                  ta: { q: "Football and bibs neengale tharuvingala?", a: "Aama! Oru nalla quality football-um, vilayada thevayana bibs-um free-ah tharuvom. Manager office-la kettukonga." }
                },
                {
                  en: { q: "Can we play during heavy rain?", a: "Our turf has an advanced drainage system, so light to moderate rain is perfectly fine. However, in case of thunderstorms, we will reschedule your slot for safety." },
                  ta: { q: "Mazhai peiyum pothu vilayadalama?", a: "Namma turf-la super drainage system irukku, so normal mazhai-na prechanai illa. Aana idi, minnal iruntha safety-kaga unga slot-a vera time-ku mathi tharuvom." }
                },
                {
                  en: { q: "What is your cancellation policy?", a: "Cancellations made 24 hours before the slot are eligible for a full refund or reschedule. Last-minute cancellations are non-refundable." },
                  ta: { q: "Slot cancel panna mudiyuma?", a: "24 hours-ku munnadi cancel panna full amount refund aagum illa vera slot book pannikalam. Last minute-la cancel panna refund kedaikathu." }
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-[#0a120a] border border-white/5 rounded-2xl px-6 data-[state=open]:border-[#10b981]/50 transition-colors">
                  <AccordionTrigger className="hover:no-underline text-left text-lg font-bold text-white py-6">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white block"></span> {faqLang === 'en' ? faq.en.q : faq.ta.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-sm leading-relaxed pl-5 pb-6">
                    {faqLang === 'en' ? faq.en.a : faq.ta.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
