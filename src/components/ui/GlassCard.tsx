"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  accentGlow?: "cyan" | "violet" | "emerald" | "amber" | "none";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  interactive = true,
  accentGlow = "none",
  onClick,
}: GlassCardProps) {
  const glowStyles = {
    cyan: "hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.22)] hover:border-[#00F0FF]/40",
    violet: "hover:shadow-[0_20px_40px_-15px_rgba(138,43,226,0.22)] hover:border-[#8A2BE2]/40",
    emerald: "hover:shadow-[0_20px_40px_-15px_rgba(0,229,153,0.22)] hover:border-[#00E599]/40",
    amber: "hover:shadow-[0_20px_40px_-15px_rgba(255,184,0,0.22)] hover:border-[#FFB800]/40",
    none: "",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl p-6 overflow-hidden transition-all duration-300",
        interactive ? "glass-pod-interactive cursor-pointer" : "glass-pod",
        interactive && glowStyles[accentGlow],
        className
      )}
    >
      {/* Specular Top Rim Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Corner Refraction Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/[0.02] blur-2xl" />

      {children}
    </div>
  );
}

