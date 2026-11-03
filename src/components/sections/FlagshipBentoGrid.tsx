"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FLAGSHIP_PROJECTS, ProjectData } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

interface FlagshipBentoGridProps {
  onSelectProject: (project: ProjectData) => void;
}

export function FlagshipBentoGrid({ onSelectProject }: FlagshipBentoGridProps) {
  const [structura, swiftRide, quantumForge, blockGuard] = FLAGSHIP_PROJECTS;

  return (
    <section id="flagship-systems" className="relative py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] mb-2 flex items-center justify-center md:justify-start gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
            TIER-1 FLAGSHIP ARCHITECTURES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineered Determinism.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
            Asymmetric computational systems engineered from first principles: verified structural mechanics, zero-commission transit, equivariant physics, and cryptographic hardware tokens.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500 text-center md:text-right">
          CLICK CARD FOR DEEP-DIVE ARCHITECTURAL TELEMETRY ↗
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Structura Nexus (Col Span 7) */}
        <div className="md:col-span-7">
          <GlassCard
            accentGlow="cyan"
            onClick={() => onSelectProject(structura)}
            className="h-full flex flex-col justify-between group p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold tracking-wider text-[#00F0FF] bg-cyan-500/10 border border-cyan-500/30">
                  {structura.badgeText}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {structura.codeName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                {structura.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-1">
                {structura.tagline}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {structura.summary}
              </p>

              {/* Core Feature Matrix */}
              <div className="mt-6 grid grid-cols-2 gap-2 font-mono text-xs text-zinc-300">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[#00F0FF] font-bold">12-DOF DSM Solver</div>
                  <div className="text-[10px] text-zinc-500">0.0000% error vs Timoshenko</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-emerald-400 font-bold">&lt;1.82ms PyG MPNN</div>
                  <div className="text-[10px] text-zinc-500">Sub-millisecond surrogate stress</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                Inspect Architectural Blueprint
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-[#00F0FF]" />
              </span>
              <span className="font-mono text-[10px] text-[#00F0FF] bg-cyan-500/10 px-2 py-0.5 rounded">
                LIVE DEPLOYED
              </span>
            </div>
          </GlassCard>
        </div>

        {/* Card 2: Swift Ride (Col Span 5) */}
        <div className="md:col-span-5">
          <GlassCard
            accentGlow="emerald"
            onClick={() => onSelectProject(swiftRide)}
            className="h-full flex flex-col justify-between group p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold tracking-wider text-[#00E599] bg-emerald-500/10 border border-emerald-500/30">
                  {swiftRide.badgeText}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {swiftRide.codeName}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#00E599] transition-colors">
                {swiftRide.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-1">
                {swiftRide.tagline}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {swiftRide.summary}
              </p>

              <div className="mt-6 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-zinc-400">Platform Take-Rate:</span>
                  <span className="text-[#00E599] font-bold">0.0% Commission</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-zinc-400">Security Gate:</span>
                  <span className="text-white">4-Digit Boarding PIN</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                Inspect Mobility Protocol
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-[#00E599]" />
              </span>
              <span className="font-mono text-[10px] text-[#00E599] bg-emerald-500/10 px-2 py-0.5 rounded">
                MOBILE STABLE
              </span>
            </div>
          </GlassCard>
        </div>

        {/* Card 3: Quantum Forge (Col Span 5) */}
        <div className="md:col-span-5">
          <GlassCard
            accentGlow="violet"
            onClick={() => onSelectProject(quantumForge)}
            className="h-full flex flex-col justify-between group p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold tracking-wider text-[#A78BFA] bg-purple-500/10 border border-purple-500/30">
                  {quantumForge.badgeText}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {quantumForge.codeName}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                {quantumForge.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-1">
                {quantumForge.tagline}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {quantumForge.summary}
              </p>

              <div className="mt-6 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-zinc-400">Potential Committee:</span>
                  <span className="text-[#A78BFA] font-bold">5-Member PaiNN</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-zinc-400">Acceleration:</span>
                  <span className="text-white">Apple Silicon Metal (MPS)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                Inspect Molecular Physics
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-[#A78BFA]" />
              </span>
              <span className="font-mono text-[10px] text-[#A78BFA] bg-purple-500/10 px-2 py-0.5 rounded">
                418 TESTS PASS
              </span>
            </div>
          </GlassCard>
        </div>

        {/* Card 4: BlockGuard (Col Span 7) */}
        <div className="md:col-span-7">
          <GlassCard
            accentGlow="amber"
            onClick={() => onSelectProject(blockGuard)}
            className="h-full flex flex-col justify-between group p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold tracking-wider text-[#FFB800] bg-amber-500/10 border border-amber-500/30">
                  {blockGuard.badgeText}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {blockGuard.codeName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFB800] transition-colors">
                {blockGuard.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-1">
                {blockGuard.tagline}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {blockGuard.summary}
              </p>

              {/* Core Feature Matrix */}
              <div className="mt-6 grid grid-cols-2 gap-2 font-mono text-xs text-zinc-300">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[#FFB800] font-bold">5-Way Forensic Check</div>
                  <div className="text-[10px] text-zinc-500">GS1 + OCR + NFC SUN + Sepolia</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-cyan-300 font-bold">NXP NTAG 424 DNA</div>
                  <div className="text-[10px] text-zinc-500">Dynamic rolling AES-128 CMAC</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                Inspect Hardware-Blockchain Spec
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-[#FFB800]" />
              </span>
              <span className="font-mono text-[10px] text-[#FFB800] bg-amber-500/10 px-2 py-0.5 rounded">
                HARDWARE ANCHORED
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

