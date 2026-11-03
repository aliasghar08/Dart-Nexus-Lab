"use client";

import React, { useState } from "react";
import { CyberGridBackground } from "@/components/canvas/CyberGridBackground";
import { ParticleField } from "@/components/canvas/ParticleField";
import { FloatingCapsuleNav } from "@/components/navigation/FloatingCapsuleNav";
import { LabTerminalDrawer } from "@/components/navigation/LabTerminalDrawer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FlagshipBentoGrid } from "@/components/sections/FlagshipBentoGrid";
import { EcosystemDrawer } from "@/components/sections/EcosystemDrawer";
import { EngineeringManifesto } from "@/components/sections/EngineeringManifesto";
import { LabTelemetryStrip } from "@/components/sections/LabTelemetryStrip";
import { ProjectDetailModal } from "@/components/ui/ProjectDetailModal";
import { ProjectData } from "@/data/projectsData";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  const handleExploreSystems = () => {
    const el = document.getElementById("flagship-systems");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#05070B] text-white overflow-hidden">
      {/* Dynamic 3D WebGL Mathematical Mesh Canvas */}
      <CyberGridBackground />
      <ParticleField />

      {/* Top visionOS Suspended Glass Capsule Navbar */}
      <FloatingCapsuleNav
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenEcosystem={() => setIsEcosystemOpen(true)}
      />

      {/* Master Viewport Sections */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Workstation */}
        <HeroSection
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onExploreSystems={handleExploreSystems}
        />

        {/* Live Lab Telemetry Strip */}
        <LabTelemetryStrip />

        {/* Tier-1 Flagship Asymmetric Bento Grid */}
        <FlagshipBentoGrid onSelectProject={(p) => setSelectedProject(p)} />

        {/* Engineering Philosophy Manifesto */}
        <EngineeringManifesto />

        {/* Executive Terminal Drawer Modal */}
        <LabTerminalDrawer
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />

        {/* Secondary Ecosystem Slide-Out Drawer */}
        <EcosystemDrawer
          isOpen={isEcosystemOpen}
          onClose={() => setIsEcosystemOpen(false)}
        />

        {/* Deep-Dive Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Production Footer & Disclosures */}
        <footer className="mt-20 border-t border-white/10 bg-[#06090E] py-14 px-4 text-xs font-mono text-zinc-400">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold tracking-tight">
                <span className="text-[#00F0FF]">Δ</span>
                <span>DART NEXUS LAB</span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-400 font-normal">com.dartnexuslab</span>
              </div>
              <p className="text-zinc-500 text-[11px] max-w-md">
                Engineered by <strong className="text-zinc-300">Ali Asghar</strong> (Lead Architect). Built on deterministic mathematics, edge neural execution, and hardware trust roots.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-300">
              <a
                href="https://github.com/aliasghar08"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00F0FF] transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub @aliasghar08</span>
              </a>

              <a
                href="mailto:contact@dartnexuslab.com"
                className="hover:text-[#00F0FF] transition-colors flex items-center gap-1"
              >
                <Mail className="h-4 w-4" />
                <span>contact@dartnexuslab.com</span>
              </a>

              <a
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Compliance
              </a>

              <a
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of IP
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-[10px]">
            <div>
              © 2026 Dart Nexus Lab. All sovereign engineering assets and benchmarks reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>HOSTED ON FIREBASE CDN (dart-nexus-lab)</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
