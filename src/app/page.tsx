"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Award, Flame, Car, Droplets, Shield, MapPin, Play, Phone, Mail, Send, CheckCircle2, Star, Users, Wind, Trophy, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Meteors } from "@/components/ui/meteors";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  const [faqLang, setFaqLang] = useState<'en' | 'ta'>('en');
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 250]);

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
      <section id="home" className="relative flex flex-col items-center justify-start min-h-[85vh] pt-32 pb-12">
        {/* Top Half Dark Background */}
        <div className="absolute top-0 left-0 right-0 h-[70vh] z-0 bg-[#060a06] overflow-hidden">
          <motion.div style={{ y: yHero }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/turf_night_view.png"
              alt="Cinematic Turf Background"
              fill
              className="object-cover object-center opacity-50"
              priority
            />
          </motion.div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a06]/80 via-transparent to-[#060a06]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Bold Premium Typography (Athletic Style) */}
            <h2 className="text-sm sm:text-lg font-bold tracking-[0.3em] uppercase mb-4 text-white/80 mt-10">
              Virudhachalam’s Finest
            </h2>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black font-heading uppercase italic tracking-tighter leading-[0.9] text-white drop-shadow-2xl flex flex-col items-center">
              <span>PREMIUM <span className="text-[#10b981]">CRICKET</span></span>
              <span>& FOOTBALL</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/90 font-medium max-w-2xl leading-relaxed tracking-wide">
              Engineered for the pros, accessible for everyone. Experience the perfect pitch with floodlights and premium grass.
            </p>

            {/* Overlapping Search/Stats Box */}
            <div className="w-full max-w-4xl mx-auto mt-20 bg-white rounded-none shadow-2xl border border-zinc-200">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-200 text-left">
                
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Happy Players</span>
                  <span className="text-3xl font-black font-heading italic text-zinc-900 flex items-center">
                    <NumberTicker value={50} />K+
                  </span>
                </div>
                
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Google Rating</span>
                  <span className="text-3xl font-black font-heading italic text-[#065f2e] flex items-center gap-2">
                    4.9 <Star className="w-6 h-6 fill-[#065f2e]" />
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</span>
                  <span className="text-2xl font-black font-heading italic text-zinc-900 leading-none">
                    CITY CENTER
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-center bg-[#065f2e]">
                  <Link href="/booking" className="w-full h-full flex items-center justify-center text-white font-black uppercase tracking-wider hover:scale-105 transition-transform gap-2">
                    <Calendar className="w-5 h-5" /> Book Now
                  </Link>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </section>
      {/* ── MAGIC UI MARQUEE ── */}
      <section className="py-6 bg-[#065f2e] border-none overflow-hidden">
        <Marquee className="[--duration:30s]" repeat={6}>
          {[
            "⚽ FIFA Certified Grass",
            "💡 High-Mast Lighting",
            "🚿 Clean Washrooms",
            "🚗 Premium Parking",
            "🏆 Tournaments Allowed"
          ].map((feature, i) => (
            <div key={i} className="mx-8 text-white font-black text-sm md:text-lg tracking-widest uppercase flex items-center italic">
              {feature}
            </div>
          ))}
        </Marquee>
      </section>

      {/* ── GALLERY SECTION (Swipeable) ── */}
      <section id="gallery" className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Our Ground</h2>
              <h3 className="text-4xl md:text-6xl font-black font-heading text-zinc-900 uppercase italic">
                FEATURED ARENAS
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest hidden md:inline-block">
                <span className="w-8 h-[1px] bg-zinc-500 block"></span>
                Swipe to explore
              </span>
            </div>
          </div>
        </div>
          
        <div className="w-full pl-6 md:pl-12">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -600 }} 
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6 cursor-grab pb-8"
          >
            {[
              { title: "Day View", img: "/turf_day.jpg" },
              { title: "Night Lights", img: "/turf_night.png" },
              { title: "Premium Grass", img: "/turf_grass.jpg" }
            ].map((item, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[500px] bg-white rounded-none border border-zinc-200 overflow-hidden shadow-sm group">
                <div className="relative h-[200px] md:h-[300px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-black uppercase text-zinc-900 italic tracking-wide">{item.title}</h4>
                  <p className="text-sm text-zinc-500 mt-2">FIFA standard specification</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* View All Facilities Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/facilities" className="h-14 px-8 rounded-none border-2 border-[#065f2e] bg-white text-[#065f2e] font-black text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#065f2e] hover:text-white transition-colors">
            View All Facilities
          </Link>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section id="pricing" className="py-24 relative overflow-hidden bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Pricing Plans</h2>
            <h3 className="text-4xl md:text-6xl font-black font-heading text-zinc-900 uppercase italic">CHOOSE YOUR SESSION</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-none p-8 border ${plan.popular ? 'bg-white border-2 border-[#065f2e] shadow-xl md:-translate-y-4' : 'bg-zinc-50 border-zinc-200 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#065f2e] text-white text-[10px] font-black uppercase tracking-widest">
                    Available Now
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-zinc-900 font-black italic tracking-wider uppercase mb-2 text-xl">{plan.name}</h4>
                  <p className="text-zinc-500 text-sm font-medium">{plan.desc}</p>
                </div>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black font-heading italic text-[#065f2e] tracking-tighter">{plan.price}</span>
                  <span className="text-zinc-500 font-bold uppercase text-xs">/ hour</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                      <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-[#065f2e]' : 'text-zinc-400'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className={`w-full py-4 rounded-none font-black uppercase tracking-wider text-sm transition-all flex justify-center items-center ${plan.popular ? 'bg-[#065f2e] text-white hover:bg-[#04401f]' : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'}`}>
                  Select Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOURNAMENT HOSTING SECTION ── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-200 bg-white mb-6 shadow-sm">
                <Trophy className="w-4 h-4 text-[#065f2e]" />
                <span className="text-[10px] font-black tracking-widest text-[#065f2e] uppercase">Corporate & Local Leagues</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-zinc-900 uppercase italic tracking-tight leading-none mb-6">
                HOST YOUR TOURNAMENT
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
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
              <Link href="#contact" className="h-14 px-8 inline-flex rounded-none bg-[#065f2e] text-white font-black text-sm uppercase tracking-wider items-center gap-2 hover:bg-[#04401f] transition-colors shadow-sm">
                Enquire Now <Award className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video md:aspect-[4/3] rounded-none overflow-hidden border border-zinc-200 shadow-sm group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1518605368461-1ee7c5108f91?q=80&w=1200" 
                alt="Tournament" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between">
                  <span className="text-white font-black text-2xl font-heading tracking-wider italic">CHAMPIONSHIP ARENA</span>
                  <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center border border-zinc-200 shadow-sm">
                    <Trophy className="w-6 h-6 text-[#065f2e]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (REVIEWS) ── */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Player Reviews</h2>
            <h3 className="text-4xl md:text-6xl font-black font-heading text-zinc-900 uppercase italic">HEAR FROM CHAMPIONS</h3>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Got Questions?</h2>
            <h3 className="text-4xl md:text-6xl font-black font-heading text-zinc-900 uppercase italic mb-8">FREQUENTLY ASKED</h3>
            
            {/* Language Toggle */}
            <div className="inline-flex bg-white border border-zinc-200 rounded-none p-1 mb-6 shadow-sm">
              <button 
                onClick={() => setFaqLang('en')}
                className={`px-6 py-2 rounded-none text-sm font-bold uppercase tracking-wider transition-all ${faqLang === 'en' ? 'bg-[#065f2e] text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                English
              </button>
              <button 
                onClick={() => setFaqLang('ta')}
                className={`px-6 py-2 rounded-none text-sm font-bold uppercase tracking-wider transition-all ${faqLang === 'ta' ? 'bg-[#065f2e] text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
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
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-zinc-200 rounded-none px-6 data-[state=open]:border-[#065f2e] transition-colors shadow-sm">
                  <AccordionTrigger className="hover:no-underline text-left text-lg font-black italic text-zinc-900 py-6">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-[#065f2e] block"></span> {faqLang === 'en' ? faq.en.q : faq.ta.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-600 font-medium text-sm leading-relaxed pl-5 pb-6">
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
