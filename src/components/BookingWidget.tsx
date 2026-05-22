"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      fullDate: date,
      isToday: i === 0
    });
  }
  return dates;
};

const timeSlots = {
  Morning: ["06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM"],
  Evening: ["05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"],
  Night: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"],
};

export const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const dates = generateDates();

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-b from-zinc-700 to-black rounded-[2rem] blur opacity-20" />
      <div className="relative bg-[#0a120a] border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Date Selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-400" /> Select Date
            </h4>
            <span className="text-xs font-semibold text-zinc-500 uppercase">Next 7 Days</span>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
            {dates.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedDate(idx);
                  setSelectedSlot(null); // Reset slot on date change
                }}
                className={`relative flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl border transition-all snap-start ${
                  selectedDate === idx
                    ? 'bg-white border-white text-black'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <span className="text-xs font-bold uppercase mb-1">{item.day}</span>
                <span className={`text-2xl font-black ${selectedDate === idx ? 'text-black' : 'text-white'}`}>
                  {item.date}
                </span>
                {item.isToday && (
                  <span className={`absolute -bottom-2 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${selectedDate === idx ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-300'}`}>
                    Today
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-zinc-400" />
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Select Slot</h4>
          </div>

          <div className="space-y-6">
            {Object.entries(timeSlots).map(([period, slots]) => (
              <div key={period}>
                <h5 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{period}</h5>
                <div className="grid grid-cols-3 gap-3">
                  {slots.map((slot) => {
                    const isBooked = Math.random() > 0.8; // Randomly mock some booked slots
                    const isSelected = selectedSlot === slot;
                    
                    return (
                      <button
                        key={slot}
                        disabled={isBooked}
                        onClick={() => setSelectedSlot(slot)}
                        className={`relative h-12 rounded-xl text-xs font-bold transition-all border ${
                          isBooked
                            ? 'bg-red-500/10 border-red-500/20 text-red-500/50 cursor-not-allowed opacity-50'
                            : isSelected
                            ? 'bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                            : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/30'
                        }`}
                      >
                        {slot}
                        {isSelected && (
                          <motion.div layoutId="active-slot" className="absolute inset-0 border-2 border-white rounded-xl" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary & Action */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Total Price</p>
              <p className="text-3xl font-black text-white tracking-tighter">₹1,000</p>
            </div>
            <div className="text-right">
              {selectedSlot ? (
                <div className="flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                  {selectedSlot} Selected
                </div>
              ) : (
                <p className="text-xs font-bold text-red-400 uppercase">Select a time slot</p>
              )}
            </div>
          </div>

          <button 
            disabled={!selectedSlot}
            className={`w-full h-14 rounded-xl font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all ${
              selectedSlot 
                ? 'bg-white text-black hover:bg-zinc-200 shadow-lg cursor-pointer' 
                : 'bg-white/10 text-zinc-500 cursor-not-allowed'
            }`}
          >
            Confirm Booking <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
