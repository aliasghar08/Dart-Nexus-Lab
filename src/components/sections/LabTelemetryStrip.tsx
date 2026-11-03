"use client";

import React from "react";

export function LabTelemetryStrip() {
  const telemetryPoints = [
    { label: "Direct Stiffness Formulation", value: "0.0000% Error", desc: "Timoshenko Benchmark Exact" },
    { label: "PyG MPNN Latency", value: "<1.82 ms", desc: "Silicon Neural Accelerators" },
    { label: "P2P Transit Platform Cut", value: "0.0% Take-Rate", desc: "100% Retained Driver Yield" },
    { label: "Unit Test Verification", value: "100% Pass", desc: "Pure State Reducer Suite" },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-[#070A0F]/90 backdrop-blur-md py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-300">
            SYSTEM TELEMETRY AUDIT <span className="text-zinc-500">• REVISION 2026.11</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12">
          {telemetryPoints.map((point, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                {point.label}
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">
                {point.value}
              </span>
              <span className="font-mono text-[10px] text-cyan-400">
                {point.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

