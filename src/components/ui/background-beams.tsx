"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://assets.aceternity.com/noise.png')] mix-blend-overlay" />
          <div className="absolute -inset-[10px] opacity-50">
            <svg
              className="absolute h-full w-full stroke-white/10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <pattern
                  id="gridPattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              {/* Animated Beams without the grid */}
              <motion.line
                x1="-100%"
                y1="20%"
                x2="200%"
                y2="20%"
                stroke="url(#beam)"
                strokeWidth="2"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              />
              <motion.line
                x1="-100%"
                y1="60%"
                x2="200%"
                y2="60%"
                stroke="url(#beam)"
                strokeWidth="2"
                initial={{ x: "-50%" }}
                animate={{ x: "150%" }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "linear",
                }}
              />
              <motion.line
                x1="30%"
                y1="-100%"
                x2="30%"
                y2="200%"
                stroke="url(#beam)"
                strokeWidth="2"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
