"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft } from "lucide-react";
import { FLAGSHIP_PROJECTS, ECOSYSTEM_PROJECTS, LAB_TELEMETRY } from "@/data/projectsData";

interface LabTerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  type: "input" | "output" | "error" | "system";
  content: string | React.ReactNode;
}

export function LabTerminalDrawer({ isOpen, onClose }: LabTerminalDrawerProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init-1",
      type: "system",
      content: "DART NEXUS LAB [Interactive Engineering Kernel v3.4.12]",
    },
    {
      id: "init-2",
      type: "system",
      content: "Connected to telemetry core: com.dartnexuslab • Lead: aliasghar08",
    },
    {
      id: "init-3",
      type: "output",
      content: "Type 'help' to inspect available telemetry commands, or 'benchmark' to run verification tests.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: CommandLog[] = [
      ...logs,
      { id: String(Date.now()), type: "input", content: `nexus@terminal:~$ ${inputVal}` },
    ];

    switch (cmd) {
      case "help":
        newLogs.push({
          id: String(Date.now() + 1),
          type: "output",
          content: (
            <div className="space-y-1 text-zinc-300">
              <p className="text-[#00F0FF] font-semibold">AVAILABLE DIAGNOSTIC UTILITIES:</p>
              <p><span className="text-cyan-300 font-bold">status</span> - Inspect real-time laboratory telemetry & runtime health</p>
              <p><span className="text-cyan-300 font-bold">projects</span> - List flagship and ecosystem repositories</p>
              <p><span className="text-cyan-300 font-bold">benchmark</span> - Run simulated numerical verification on DSM & PaiNN</p>
              <p><span className="text-cyan-300 font-bold">manifesto</span> - Print zero-wrapper engineering principles</p>
              <p><span className="text-cyan-300 font-bold">whoami</span> - Display developer cryptographic identity</p>
              <p><span className="text-cyan-300 font-bold">clear</span> - Flush terminal screen buffer</p>
            </div>
          ),
        });
        break;

      case "status":
        newLogs.push({
          id: String(Date.now() + 1),
          type: "output",
          content: (
            <div className="font-mono text-xs space-y-0.5 text-zinc-300">
              <p className="text-emerald-400 font-bold">▶ TELEMETRY MATRIX: OPTIMAL</p>
              <p>Host: {LAB_TELEMETRY.targetDomain}</p>
              <p>Namespace: {LAB_TELEMETRY.namespace}</p>
              <p>Direct Stiffness Formulation Error: <span className="text-[#00F0FF] font-bold">0.0000%</span></p>
              <p>PyG MPNN Inference: <span className="text-[#00E599] font-bold">&lt;1.82ms</span></p>
              <p>P2P Transit Platform Fee: <span className="text-emerald-300 font-bold">0.0%</span></p>
              <p>Hardware Cryptographic Anchor: <span className="text-[#FFB800] font-bold">Sepolia / NXP NTAG 424</span></p>
              <p>Test Suite Passing: <span className="text-white font-bold">{LAB_TELEMETRY.verifiedTestsPassing}</span></p>
            </div>
          ),
        });
        break;

      case "projects":
        newLogs.push({
          id: String(Date.now() + 1),
          type: "output",
          content: (
            <div className="space-y-2 text-xs">
              <p className="text-[#00F0FF] font-bold">FLAGSHIP PLATFORMS:</p>
              {FLAGSHIP_PROJECTS.map((p) => (
                <div key={p.id} className="pl-2 border-l border-cyan-500/40">
                  <span className="text-white font-semibold">{p.title}</span> ({p.codeName})
                  <div className="text-zinc-400">{p.tagline}</div>
                </div>
              ))}
              <p className="text-[#8A2BE2] font-bold mt-2">SECONDARY ECOSYSTEM:</p>
              <p className="text-zinc-300 pl-2">
                {ECOSYSTEM_PROJECTS.map((e) => e.title).join(" • ")}
              </p>
            </div>
          ),
        });
        break;

      case "benchmark":
        newLogs.push({
          id: String(Date.now() + 1),
          type: "output",
          content: (
            <div className="text-xs space-y-1 font-mono">
              <p className="text-amber-400">EXECUTING HARDWARE SUITE BENCHMARKS...</p>
              <p className="text-zinc-300">[1/3] Timoshenko 3D Cantilever DSM Test: <span className="text-emerald-400">PASSED (Δ = 0.000000e+00)</span></p>
              <p className="text-zinc-300">[2/3] PyG Message-Passing Stress Surrogate: <span className="text-emerald-400">PASSED (1.78ms on Metal MPS)</span></p>
              <p className="text-zinc-300">[3/3] NTAG 424 DNA HMAC Dynamic Signature: <span className="text-emerald-400">VERIFIED (Valid AES-128 CMAC)</span></p>
              <p className="text-[#00F0FF] font-bold pt-1">All ground-truth constraints satisfied.</p>
            </div>
          ),
        });
        break;

      case "manifesto":
        newLogs.push({
          id: String(Date.now() + 1),
          type: "output",
          content: (
            <div className="text-xs space-y-1 text-zinc-300 italic">
              <p className="text-[#00F0FF] font-bold not-italic">THE DART NEXUS LAB ENGINEERING CREED:</p>
              <p>&quot;We reject hallucinating wrappers. Real intelligence begins when code respects finite element equilibrium, stoichiometric mass conservation, and cryptographic invariance.&quot;</p>
            </div>
          ),
        });
        break;

      case "whoami":
        newLogs.push({
          id: String(Date.now() + 1),
          type: "output",
          content: (
            <div className="text-xs text-zinc-300">
              <p className="font-bold text-white">Lead Architect: Ali Asghar</p>
              <p>GitHub: <a href="https://github.com/aliasghar08" target="_blank" rel="noreferrer" className="text-[#00F0FF] underline">github.com/aliasghar08</a></p>
              <p>Focus: Deterministic Mechanics • Edge Neural Inference • Cryptographic Supply-Chain</p>
            </div>
          ),
        });
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        newLogs.push({
          id: String(Date.now() + 1),
          type: "error",
          content: `Command not recognized: '${inputVal}'. Type 'help' for available commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl h-[85vh] sm:h-[620px] rounded-t-3xl sm:rounded-2xl glass-pod border border-white/20 flex flex-col overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E14] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-[#00F0FF]" />
              nexus-diagnostics@edge:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-zinc-500 hidden sm:inline">
              UTF-8 • SHELL: ZSH
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2 select-text">
          {logs.map((log) => (
            <div key={log.id}>
              {log.type === "system" && (
                <div className="text-zinc-500 font-semibold">{log.content}</div>
              )}
              {log.type === "input" && (
                <div className="text-[#00F0FF]">{log.content}</div>
              )}
              {log.type === "output" && (
                <div className="py-1">{log.content}</div>
              )}
              {log.type === "error" && (
                <div className="text-rose-400 font-semibold">{log.content}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-[#080B10] border-t border-white/10"
        >
          <span className="font-mono text-xs text-[#00F0FF] font-bold">
            nexus@terminal:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or 'benchmark'..."
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-zinc-600 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send command"
            className="p-1.5 rounded-lg bg-cyan-500/20 text-[#00F0FF] hover:bg-cyan-500/30 transition-colors"
          >
            <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}

