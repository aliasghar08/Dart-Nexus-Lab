"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  label: string;
  value: string;
  subtext?: string;
  variant?: "cyan" | "violet" | "emerald" | "amber" | "neutral";
  className?: string;
}

export function MetricBadge({
  label,
  value,
  subtext,
  variant = "cyan",
  className,
}: MetricBadgeProps) {
  const colorMap = {
    cyan: {
      border: "border-[#00F0FF]/30",
      bg: "bg-[#00F0FF]/5",
      text: "text-[#00F0FF]",
      dot: "bg-[#00F0FF]",
    },
    violet: {
      border: "border-[#8A2BE2]/30",
      bg: "bg-[#8A2BE2]/5",
      text: "text-[#A78BFA]",
      dot: "bg-[#8A2BE2]",
    },
    emerald: {
      border: "border-[#00E599]/30",
      bg: "bg-[#00E599]/5",
      text: "text-[#00E599]",
      dot: "bg-[#00E599]",
    },
    amber: {
      border: "border-[#FFB800]/30",
      bg: "bg-[#FFB800]/5",
      text: "text-[#FFB800]",
      dot: "bg-[#FFB800]",
    },
    neutral: {
      border: "border-white/10",
      bg: "bg-white/[0.03]",
      text: "text-zinc-200",
      dot: "bg-emerald-400",
    },
  };

  const scheme = colorMap[variant];

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border p-3.5 backdrop-blur-md transition-all duration-300",
        scheme.border,
        scheme.bg,
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
          {label}
        </span>
        <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", scheme.dot)} />
      </div>
      <div className={cn("mt-1.5 font-mono text-base font-semibold tracking-tight", scheme.text)}>
        {value}
      </div>
      {subtext && (
        <span className="mt-1 font-mono text-[10px] text-zinc-500 line-clamp-1">
          {subtext}
        </span>
      )}
    </div>
  );
}

