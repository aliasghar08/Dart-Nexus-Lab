"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Cpu, Binary, Terminal } from "lucide-react";

export function EngineeringManifesto() {
  const principles = [
    {
      num: "01",
      title: "Mathematical & Physical Ground Truth",
      icon: Binary,
      color: "#00F0FF",
      tagline: "Deterministic matrix formulations over hallucinating wrappers.",
      body: "Modern computing has succumbed to 'Wrapper Syndrome'—thin UI shells lazily piping prompts to probabilistic LLMs. At Dart Nexus Lab, our engineering guarantees closed-loop numerical determinism: 12-DOF stiffness matrices that satisfy Navier-Bernoulli beam theory with 0.0000% error, and symplectic molecular dynamics that conserve Hamiltonian energy without stochastic drift.",
    },
    {
      num: "02",
      title: "Real Neural Inference on the Edge",
      icon: Cpu,
      color: "#00E599",
      tagline: "Sub-millisecond graph and regression surrogates in local runtime.",
      body: "We do not introduce blocking cloud roundtrips for evaluation that belongs on silicon. Our Message Passing Neural Networks (MPNNs) and fare estimators are compiled to PyTorch Geometric, ONNX, and TensorFlow Lite Micro—executing in under 1.85 milliseconds directly on Apple Metal Performance Shaders (MPS) and mobile Neural Processing Units.",
    },
    {
      num: "03",
      title: "Hardware Cryptographic Anchoring",
      icon: ShieldCheck,
      color: "#FFB800",
      tagline: "Silicon-anchored keys and immutable dynamic signatures.",
      body: "Software alone cannot assert physical truth. We anchor critical pharmaceutical and financial interactions to hardware roots of trust: NXP NTAG 424 DNA dynamic cryptographic NFC chips issuing rolling AES-128 CMAC authentications, paired with Android StrongBox Keystores and immutable Sepolia Ethereum transaction receipts.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] text-zinc-400 mb-4">
          <Terminal className="h-3.5 w-3.5 text-[#00F0FF]" />
          <span>ENGINEERING MANIFESTO • ZERO WRAPPER SYNDROME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Why We Reject The &ldquo;Wrapper AI&rdquo; Illusion
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          The industry is saturated with fragile prompt-wrappers that collapse under real-world tolerances. Dart Nexus Lab builds software anchored in non-negotiable physical laws, closed-loop mathematics, and cryptographic certainty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <GlassCard
              key={p.num}
              className="p-8 flex flex-col justify-between"
              interactive={false}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="p-3 rounded-2xl bg-black/40 border border-white/10"
                    style={{ color: p.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-zinc-600">
                    {p.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {p.title}
                </h3>
                <p 
                  className="mt-1 font-mono text-xs font-medium"
                  style={{ color: p.color }}
                >
                  {p.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {p.body}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                <span>Deterministic Principle Verified</span>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

