"use client";

import React from "react";
import { ArrowDown, Terminal, ExternalLink } from "lucide-react";
import { MetricBadge } from "@/components/ui/MetricBadge";

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onExploreSystems: () => void;
}

export function HeroSection({ onOpenTerminal, onExploreSystems }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-16 overflow-hidden">
      {/* Radial ambient glow behind headline */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[640px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-600/5 to-transparent blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow Diagnostics Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
          </span>
          <span className="font-mono text-[11px] font-medium tracking-wide text-zinc-300">
            SYSTEM ACTIVE • RUNTIME: DART / FASTAPI / PYTORCH • 0.0000% FORMULATION ERROR
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
          Autonomous Systems.{" "}
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#00E599] to-cyan-200 bg-clip-text text-transparent text-glow-cyan">
            Physical Ground Truth.
          </span>{" "}
          <span className="text-zinc-400 font-medium">Zero Wrapper AI.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed font-normal">
          Dart Nexus Lab architects deep-tech native ecosystems—bridging closed-loop finite element mechanics, real-time message-passing neural surrogates, cryptographic supply-chain ledgers, and zero-commission peer-to-peer transit.
        </p>

        {/* CTA Button Array */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onExploreSystems}
            className="group px-6 py-3 rounded-xl bg-[#00F0FF] hover:bg-[#38f6ff] text-black font-mono text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-2 shadow-[0_0_28px_rgba(0,240,255,0.4)] active:scale-95"
          >
            <span>Explore Flagship Systems</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <a
            href="https://github.com/aliasghar08"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl glass-pod border border-white/10 hover:border-white/20 text-white font-mono text-xs sm:text-sm font-medium transition-all hover:bg-white/[0.08] active:scale-95 flex items-center gap-2"
          >
            <span>Engineering Repositories</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-[#00F0FF] font-mono text-xs sm:text-sm transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Terminal className="h-4 w-4" />
            <span>Interactive CLI</span>
          </button>
        </div>

        {/* Real-Time Live Diagnostics Bar */}
        <div id="diagnostics" className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <MetricBadge
            label="DSM Mechanics"
            value="0.0000% Err"
            subtext="Timoshenko Benchmark Validated"
            variant="cyan"
          />
          <MetricBadge
            label="Neural Latency"
            value="<1.82 ms"
            subtext="PyG MPNN Edge Inference"
            variant="emerald"
          />
          <MetricBadge
            label="Take-Rate Commission"
            value="0.0%"
            subtext="P2P Driver Direct Settlement"
            variant="violet"
          />
          <MetricBadge
            label="Cryptographic Anchor"
            value="Sepolia / NTAG"
            subtext="NXP Dynamic SUN HMAC Hash"
            variant="amber"
          />
        </div>
      </div>
    </section>
  );
}

