"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { Calendar, Award, Flame, Car, Droplets, Shield, MapPin, Play, Phone, Mail, Send, CheckCircle2, Star, Users, Wind, Trophy, MessageCircle } from "lucide-react";

export default function Home() {
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

      {/* ── STICKY GLASS NAVBAR ── */}
      <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/5 bg-[#060a06]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-[#060a06]" />
            </div>
            <span className="text-xl font-black tracking-tight text-white uppercase">VAADIVAASAL</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300 uppercase tracking-widest">
            <a href="#home" className="hover:text-zinc-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-zinc-300 transition-colors">About Us</a>
            <a href="#gallery" className="hover:text-zinc-300 transition-colors">Gallery</a>
            <a href="#pricing" className="hover:text-zinc-300 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
          <a href="/booking" className="bg-white hover:bg-zinc-200 text-[#060a06] font-black uppercase tracking-wide px-6 py-2.5 rounded-lg text-xs transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Book Slot
          </a>
        </div>
      </nav>

      {/* ── HOME / HERO SECTION ── */}
      <section id="home" className="relative min-h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/turf_night_view.png"
            alt="Cinematic Turf Background"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060a06]/50 to-[#060a06]" />
        </div>
        
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255, 255, 255, 0.15)" />
        <BackgroundBeams />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white "></span>
              <span className="text-[10px] font-black tracking-widest text-zinc-300 uppercase">Premium Turf Experience</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
              MORE THAN JUST A TURF.<br />
              <Highlight className="text-black dark:text-black mt-2 md:mt-4 px-4 py-2 inline-block">
                WE BUILD CHAMPIONS.
              </Highlight>
            </h1>

            <p className="mt-8 text-base md:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed drop-shadow-lg">
              Experience the perfect playing environment where passion meets performance. 
              Book your slot at the finest FIFA-quality turf in the city.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <a href="/booking" className="h-14 px-8 rounded-xl bg-white text-[#060a06] font-black text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                <Calendar className="w-5 h-5" /> Book Your Turf
              </a>
              <a href="#about" className="h-14 px-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-white/10 transition-colors">
                Explore More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section id="about" className="py-24 relative bg-[#060a06] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
                TO INSPIRE. TO PLAY. <span className="text-white">TOGETHER.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are passionate about football and committed to providing world-class turf experiences for players of all ages and skill levels. Our mission is to create the perfect playing environment where passion meets performance.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-white/10 rounded-2xl p-6 bg-[#0a120a]">
                  <h4 className="text-3xl font-black text-white mb-1">50K+</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Happy Players</p>
                </div>
                <div className="border border-white/10 rounded-2xl p-6 bg-[#0a120a]">
                  <h4 className="text-3xl font-black text-white mb-1">5+</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-4">Why Choose Us</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Award className="w-5 h-5 text-zinc-300" />, text: "FIFA Certified Grass" },
                    { icon: <Flame className="w-5 h-5 text-zinc-300" />, text: "High-Mast Lighting" },
                    { icon: <Car className="w-5 h-5 text-zinc-300" />, text: "Premium Parking" },
                    { icon: <Droplets className="w-5 h-5 text-zinc-300" />, text: "Clean Washrooms" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
                      {item.icon}
                      <span className="text-sm font-bold text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 group"
            >
              <Image src="/about_hero.png" alt="About Us" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ">
                  <Play className="w-8 h-8 text-[#060a06] ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY SECTION (Swipeable) ── */}
      <section id="gallery" className="py-24 bg-[#0a120a] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Our Ground</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">The Playing Surface</h3>
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
      </section>

      {/* ── PRICING SECTION ── */}
      <section id="pricing" className="py-24 relative overflow-hidden bg-[#060a06] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Pricing Plans</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Choose Your Turf</h3>
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

      {/* ── TESTIMONIALS (REVIEWS) ── */}
      <section className="py-24 bg-[#0a120a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Player Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Hear From Champions</h3>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 bg-[#060a06] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Got Questions?</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Frequently Asked</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Are metal studs allowed on the turf?",
                a: "No, metal studs are strictly prohibited to maintain the quality of the FIFA-certified grass. Please use standard rubber studs or turf shoes."
              },
              {
                q: "Do you provide footballs and bibs?",
                a: "Yes! We provide one high-quality football and standard bibs for your session at no extra cost. Just collect them from the manager's office."
              },
              {
                q: "Can we play during heavy rain?",
                a: "Our turf has an advanced drainage system, so light to moderate rain is perfectly fine. However, in case of thunderstorms, we will reschedule your slot for safety."
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellations made 24 hours before the slot are eligible for a full refund or reschedule. Last-minute cancellations are non-refundable."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#0a120a] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white block"></span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="py-24 relative bg-[#060a06] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Get In Touch</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                Have questions about booking or organizing a tournament? We are here to help you get onto the pitch.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/50 transition-all">
                    <MapPin className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm">Location</h5>
                    <p className="text-slate-400 text-sm mt-1">123 Sports Arena Road, City Center</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/50 transition-all">
                    <Phone className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm">Phone</h5>
                    <p className="text-slate-400 text-sm mt-1">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/50 transition-all">
                    <Mail className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm">Email</h5>
                    <p className="text-slate-400 text-sm mt-1">book@vaadivaasal.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glassmorphism Contact Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-zinc-600 to-zinc-900 rounded-[2rem] blur opacity-30" />
              <div className="relative bg-[#0a120a]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Name</label>
                    <input type="text" className="w-full h-14 rounded-xl bg-white/5 border border-white/10 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input type="tel" className="w-full h-14 rounded-xl bg-white/5 border border-white/10 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="+91 00000 00000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                    <textarea rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-slate-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-emerald-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="button" className="w-full h-14 rounded-xl bg-white text-[#060a06] font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#0a120a] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-8 h-8 text-white" />
              <span className="text-2xl font-black tracking-tight text-white uppercase">VAADIVAASAL TURF</span>
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
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing Plans</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Operating Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Monday - Friday</span>
                <span className="text-white font-bold">24 Hours</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Saturday - Sunday</span>
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
          <div className="flex gap-6 text-xs font-bold uppercase text-slate-500 tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
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
