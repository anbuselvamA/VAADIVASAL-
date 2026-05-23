"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
  speed?: number;
}

export function ShinyText({
  text,
  className,
  shimmerWidth = 100,
  speed = 3,
}: ShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-no-repeat",
        "animate-[shimmer_var(--speed)_infinite_linear]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)`,
        backgroundSize: `${shimmerWidth}px 100%`,
        backgroundColor: "currentColor",
        "--speed": `${speed}s`,
      } as React.CSSProperties}
    >
      {text}
    </span>
  );
}
