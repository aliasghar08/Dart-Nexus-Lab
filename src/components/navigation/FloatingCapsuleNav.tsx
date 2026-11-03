"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Layers, ChevronRight, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingCapsuleNavProps {
  onOpenTerminal: () => void;
  onOpenEcosystem: () => void;
}

export function FloatingCapsuleNav({
  onOpenTerminal,
  onOpenEcosystem,
}: FloatingCapsuleNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Systems", href: "#flagship-systems" },
    { label: "Manifesto", href: "#philosophy" },
    { label: "Telemetry", href: "#diagnostics" },
    { label: "Research", href: "https://github.com/aliasghar08", external: true },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-4 py-2.5 rounded-full transition-all duration-300",
          "glass-pod border border-white/10 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.8)]",
          scrolled ? "bg-[#090D14]/90 backdrop-blur-2xl py-2 scale-[0.98]" : "bg-[#0D1117]/75 backdrop-blur-xl"
        )}
      >
        {/* Logo & Identity */}
        <a
          href="#"
          className="flex items-center gap-2.5 pl-1 group transition-transform duration-200 active:scale-95"
        >
          <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-500/5 border border-cyan-400/40 group-hover:border-cyan-400 transition-colors">
            <span className="font-mono text-xs font-black text-[#00F0FF]">Δ</span>
            <div className="absolute inset-0 rounded-lg bg-cyan-400/20 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
              DART NEXUS <span className="text-[#00F0FF] font-light">LAB</span>
            </span>
          </div>
        </a>

        {/* Live Status Pill */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE 2026 • 0.00% ERR</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-1"
            >
              {item.label}
              {item.external && <ArrowUpRight className="h-3 w-3 opacity-60" />}
            </a>
          ))}

          <button
            onClick={onOpenEcosystem}
            className="px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-1"
          >
            <Layers className="h-3 w-3 text-[#8A2BE2]" />
            Ecosystem
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* CLI Drawer Button */}
          <button
            onClick={onOpenTerminal}
            aria-label="Toggle Lab Terminal"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-zinc-300 hover:text-[#00F0FF] transition-all active:scale-95"
          >
            <Terminal className="h-3.5 w-3.5 text-[#00F0FF]" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* Contact / Inquire */}
          <a
            href="mailto:aliasgharinnocent@yahoo.com"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#05070B] font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,240,255,0.35)] active:scale-95"
          >
            <span>Inquire</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-1.5 rounded-full text-zinc-400 hover:text-white bg-white/[0.05]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto rounded-2xl glass-pod border border-white/15 p-4 flex flex-col gap-2.5 md:hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-mono text-xs text-zinc-400">DART NEXUS NAVIGATION</span>
            <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>

          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-mono text-zinc-200 hover:bg-white/[0.08] transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEcosystem();
            }}
            className="px-3 py-2 rounded-xl text-sm font-mono text-zinc-200 hover:bg-white/[0.08] transition-colors flex items-center justify-between text-left"
          >
            <span className="flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-[#8A2BE2]" />
              Ecosystem Track (6 Projects)
            </span>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            className="px-3 py-2 rounded-xl text-sm font-mono text-[#00F0FF] bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors flex items-center justify-between text-left"
          >
            <span className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" />
              Launch Engineering CLI
            </span>
            <ChevronRight className="h-3.5 w-3.5 text-[#00F0FF]" />
          </button>

          <a
            href="mailto:aliasgharinnocent@yahoo.com"
            className="mt-2 py-2.5 rounded-xl bg-cyan-400 text-black text-center font-mono text-xs font-bold hover:brightness-110 transition-all"
          >
            Inquire / Direct Dispatch
          </a>
        </div>
      )}
    </header>
  );
}

