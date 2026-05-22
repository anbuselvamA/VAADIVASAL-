"use client";
import React from "react";
import { BookingWidget } from "@/components/BookingWidget";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#060a06] text-slate-100 font-sans selection:bg-white/30 pt-24 pb-24">
      {/* ── STICKY GLASS NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/5 bg-[#060a06]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-white font-black tracking-widest uppercase text-xs mb-3">Instant Booking</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
              SECURE YOUR SLOT <span className="text-zinc-500">NOW.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Pick a date, select your preferred time slot, and get ready to play. Our live booking system ensures no double bookings and immediate confirmation.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Live Slot Availability", "Instant Confirmation via SMS/Email", "Secure Payment Options", "Easy Rescheduling"].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl mt-8">
              <h4 className="text-white font-bold uppercase tracking-wider mb-2">Need Help?</h4>
              <p className="text-zinc-400 text-sm">Call us at +91 98765 43210 for bulk corporate bookings or special event tournaments.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BookingWidget />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
