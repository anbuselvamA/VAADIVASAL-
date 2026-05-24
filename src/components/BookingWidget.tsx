"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, CheckCircle2, Award } from "lucide-react";

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

const plans = [
  { id: "basic", name: "Basic Turf", price: 700 },
  { id: "elite", name: "Elite Turf", price: 1500 },
  { id: "vip", name: "VIP Turf", price: 2000 }
];

export const BookingWidget = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const dates = generateDates();

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative bg-white border border-zinc-200 rounded-none p-6 sm:p-8 shadow-xl overflow-hidden">
        
        {/* Plan Selector */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-zinc-400" />
            <h4 className="text-zinc-900 font-black uppercase tracking-wider text-sm italic">Select Plan</h4>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {plans.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`relative h-12 rounded-none text-[10px] sm:text-xs font-black uppercase italic transition-all border shadow-sm ${
                  selectedPlan.id === plan.id
                    ? 'bg-[#065f2e] border-[#065f2e] text-white'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-[#065f2e]'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>
        {/* Date Selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-zinc-900 font-black uppercase tracking-wider text-sm italic flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-400" /> Select Date
            </h4>
            <span className="text-xs font-black text-[#065f2e] uppercase italic">Next 7 Days</span>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
            {dates.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedDate(idx);
                  setSelectedSlot(null); // Reset slot on date change
                }}
                className={`relative flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-none border transition-all snap-start shadow-sm ${
                  selectedDate === idx
                    ? 'bg-[#065f2e] border-[#065f2e] text-white'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-[#065f2e]'
                }`}
              >
                <span className="text-xs font-black uppercase mb-1">{item.day}</span>
                <span className={`text-2xl font-black italic ${selectedDate === idx ? 'text-white' : 'text-zinc-900'}`}>
                  {item.date}
                </span>
                {item.isToday && (
                  <span className={`absolute -bottom-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-none shadow-sm ${selectedDate === idx ? 'bg-zinc-900 text-white' : 'bg-[#065f2e] text-white'}`}>
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
            <h4 className="text-zinc-900 font-black uppercase tracking-wider text-sm italic">Select Slot</h4>
          </div>

          <div className="space-y-6">
            {Object.entries(timeSlots).map(([period, slots]) => (
              <div key={period}>
                <h5 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-3 italic">{period}</h5>
                <div className="grid grid-cols-3 gap-3">
                  {slots.map((slot) => {
                    const isBooked = Math.random() > 0.8; // Randomly mock some booked slots
                    const isSelected = selectedSlot === slot;
                    
                    return (
                      <button
                        key={slot}
                        disabled={isBooked}
                        onClick={() => setSelectedSlot(slot)}
                        className={`relative h-12 rounded-none text-[10px] sm:text-xs font-black uppercase italic transition-all border shadow-sm ${
                          isBooked
                            ? 'bg-red-50 border-red-200 text-red-500 cursor-not-allowed opacity-50'
                            : isSelected
                            ? 'bg-zinc-900 border-zinc-900 text-white'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-900'
                        }`}
                      >
                        {slot}
                        {isSelected && (
                          <motion.div layoutId="active-slot" className="absolute inset-0 border-2 border-zinc-900 rounded-none pointer-events-none" />
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
        <div className="pt-6 border-t border-zinc-200">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Total Price</p>
              <p className="text-3xl font-black text-[#065f2e] tracking-tighter italic">₹{selectedPlan.price.toLocaleString()}</p>
            </div>
            <div className="text-right">
              {selectedSlot ? (
                <div className="flex items-center gap-2 text-sm font-black italic text-zinc-900 bg-zinc-50 px-3 py-1.5 rounded-none border border-zinc-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#065f2e]" />
                  {selectedSlot} Selected
                </div>
              ) : (
                <p className="text-xs font-black text-red-500 uppercase italic">Select a time slot</p>
              )}
            </div>
          </div>

          <button 
            disabled={!selectedSlot}
            className={`w-full h-14 rounded-none font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm ${
              selectedSlot 
                ? 'bg-zinc-900 text-white hover:bg-[#065f2e] cursor-pointer' 
                : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
            }`}
          >
            Confirm Booking <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
