"use client";

import React, { useState } from "react";
import { 
  X, ExternalLink, BookOpen, Layers, CheckCircle2, 
  Activity, Shield, Sparkles, Copy, Check
} from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { ProjectData } from "@/data/projectsData";

interface ProjectDetailModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.mathematicalGroundTruth);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl glass-pod border border-white/20 flex flex-col overflow-hidden shadow-2xl my-auto animate-in zoom-in-95 duration-200"
        style={{
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 40px -10px ${project.accentColor}33`,
        }}
      >
        {/* Top Specular Rim */}
        <div 
          className="absolute inset-x-0 top-0 h-1" 
          style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} 
        />

        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/10 bg-[#0A0E15]/60">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span 
                className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider"
                style={{ 
                  backgroundColor: `${project.accentColor}18`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}40`,
                }}
              >
                {project.badgeText}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                {project.codeName}
              </span>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {project.statusText}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white pt-1">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition-all shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 select-text">
          {/* Executive Summary */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
              EXECUTIVE SPECIFICATION
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-200">
              {project.summary}
            </p>
          </div>

          {/* Key Engineering Innovations */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" style={{ color: project.accentColor }} />
              TECHNICAL ARCHITECTURE & INNOVATIONS
            </h3>
            <div className="grid gap-2.5">
              {project.keyInnovations.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hard Telemetry Metrics */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              SYSTEM VERIFICATION BENCHMARKS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0C1017] border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400">
                    <span>{metric.label}</span>
                    <span className="text-emerald-400 font-bold uppercase">{metric.status}</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-white mt-1" style={{ color: project.accentColor }}>
                    {metric.value}
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 mt-1">
                    Benchmark: {metric.benchmark}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mathematical Ground Truth Box */}
          <div className="rounded-2xl p-5 bg-[#080B10] border border-white/15 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Shield className="h-3.5 w-3.5" />
                DETERMINISTIC GROUND TRUTH FORMULATION
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre className="font-mono text-xs text-cyan-200 overflow-x-auto p-3 rounded-lg bg-black/40 border border-white/5 whitespace-pre-wrap">
              {project.mathematicalGroundTruth}
            </pre>
            <p className="mt-2.5 font-mono text-[11px] text-zinc-400">
              <strong className="text-zinc-300">Verification Evidence:</strong> {project.verificationEvidence}
            </p>
          </div>

          {/* Full Stack Layers */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-zinc-400" />
              DEPLOYMENT RUNTIME STACK
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureStack.map((layer, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between font-mono text-xs font-semibold text-white">
                    <span>{layer.name}</span>
                    <span className="text-[11px] text-cyan-400">{layer.tech}</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-white/10 bg-[#0A0E15]/90">
          <div className="flex items-center gap-2">
            {project.links.docsUrl && (
              <a
                href={project.links.docsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Research Packet</span>
              </a>
            )}
            {project.links.repoUrl && (
              <a
                href={project.links.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {project.links.liveUrl ? (
            <a
              href={project.links.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl font-mono text-xs font-bold text-black transition-all shadow-lg active:scale-95 hover:brightness-110"
              style={{
                backgroundColor: project.accentColor,
                boxShadow: `0 0 20px ${project.accentColor}66`,
              }}
            >
              <span>Launch Environment</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white"
            >
              Close Inspector
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

