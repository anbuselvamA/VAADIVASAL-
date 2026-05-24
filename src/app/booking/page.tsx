"use client";
import React from "react";
import { BookingWidget } from "@/components/BookingWidget";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-[#065f2e]/20 pt-24 pb-24 relative">
      {/* ── STICKY NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-900 hover:text-[#065f2e] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-black uppercase tracking-widest italic">Back to Home</span>
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
            <h2 className="text-[#065f2e] font-black tracking-widest uppercase text-xs mb-3">Instant Booking</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase tracking-tight italic leading-none mb-6">
              SECURE YOUR SLOT <span className="text-[#065f2e]">NOW.</span>
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8 font-medium">
              Pick a date, select your preferred time slot, and get ready to play. Our live booking system ensures no double bookings and immediate confirmation.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Live Slot Availability", "Instant Confirmation via SMS/Email", "Secure Payment Options", "Easy Rescheduling"].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-black italic uppercase text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-[#065f2e]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="p-8 border border-zinc-200 bg-white rounded-none shadow-sm mt-8">
              <h4 className="text-zinc-900 font-black uppercase tracking-wider mb-2 italic">Need Help?</h4>
              <p className="text-zinc-500 text-sm font-medium">Call us at +91 98765 43210 for bulk corporate bookings or special event tournaments.</p>
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
