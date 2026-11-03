"use client";

import React from "react";
import { 
  X, Store, CalendarClock, UserCheck, Cpu, Activity, ReceiptText, 
  ArrowUpRight, Layers 
} from "lucide-react";
import { ECOSYSTEM_PROJECTS, EcosystemProject } from "@/data/projectsData";

interface EcosystemDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EcosystemDrawer({ isOpen, onClose }: EcosystemDrawerProps) {
  if (!isOpen) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case "Store":
        return <Store className="h-5 w-5 text-[#00F0FF]" />;
      case "CalendarClock":
        return <CalendarClock className="h-5 w-5 text-[#8A2BE2]" />;
      case "UserCheck":
        return <UserCheck className="h-5 w-5 text-[#00E599]" />;
      case "Cpu":
        return <Cpu className="h-5 w-5 text-cyan-300" />;
      case "Activity":
        return <Activity className="h-5 w-5 text-rose-400" />;
      case "ReceiptText":
        return <ReceiptText className="h-5 w-5 text-[#FFB800]" />;
      default:
        return <Layers className="h-5 w-5 text-zinc-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full glass-pod border-l border-white/20 flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0A0E15]/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#8A2BE2]">
              <Layers className="h-3.5 w-3.5" />
              SECONDARY ECOSYSTEM TRACKS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Production Workstations
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 select-text">
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            Beyond the primary flagships, Dart Nexus Lab maintains mission-critical platforms spanning clinical operations, enterprise retail, biometric auditing, and offline retail nodes.
          </p>

          <div className="space-y-3.5 mt-4">
            {ECOSYSTEM_PROJECTS.map((project: EcosystemProject) => (
              <div
                key={project.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/10">
                      {getIcon(project.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[11px] text-zinc-400">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {project.status}
                  </span>
                </div>

                <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/5 font-mono text-[11px]">
                  <span className="text-cyan-400 font-medium">
                    {project.metrics}
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    {project.tech.slice(0, 2).join(" • ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0A0E15]/90 flex items-center justify-between">
          <span className="font-mono text-[11px] text-zinc-500">
            6 Specialized Ecosystem Platforms
          </span>
          <a
            href="https://github.com/aliasghar08"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[#00F0FF] hover:underline"
          >
            <span>View All on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

