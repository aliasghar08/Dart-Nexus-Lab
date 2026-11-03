import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy & Compliance Policy | Dart Nexus Lab",
  description: "Unified compliance, GDPR, DRAP, and platform data telemetry disclosures for Dart Nexus Lab.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-zinc-200 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Workstation</span>
        </Link>

        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00F0FF] mb-2">
            <Shield className="h-4 w-4" />
            REGULATORY COMPLIANCE PROTOCOL
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Platform Privacy & Telemetry Governance
          </h1>
          <p className="font-mono text-xs text-zinc-500 mt-2">
            Document Reference: DNL-PRIVACY-2026-V1 • Effective: November 2026
          </p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 font-sans">
          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#00E599]" />
            1. Zero-Surveillance Philosophy
          </h2>
          <p>
            Dart Nexus Lab is independently developed and maintained solely by Ali Asghar without external funding, investors, or corporate affiliations. It is architected strictly on deterministic client-side execution. Intrusive tracking pixels, third-party analytics telemetry, biometric aggregation, or commercial data broking are completely rejected. All engineering models (Structura Nexus, Swift Ride, Quantum Forge) execute either in pure sandboxed client runtimes or ephemeral edge microkernels.
          </p>

          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-8">
            <CheckCircle2 className="h-4 w-4 text-[#00E599]" />
            2. Mobility & Spatial Data Handling (Swift Ride)
          </h2>
          <p>
            Swift Ride utilizes Uber H3 hexagonal spatial indexing at resolution 9 (100m radius). Driver-passenger coordinates are processed ephemerally during active rides. Zero percent (0.0%) of raw passenger transit trails are retained once rides are completed and cryptographically settled into the driver&apos;s local Khata ledger.
          </p>

          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-8">
            <CheckCircle2 className="h-4 w-4 text-[#00E599]" />
            3. Pharmaceutical Anti-Counterfeit Verification (BlockGuard)
          </h2>
          <p>
            BlockGuard forensic verifications run directly on edge hardware. High-resolution camera feeds analyzed via Camera2 are processed in volatile memory. Only the cryptographic HMAC-SHA256 digests and serial hashes are matched against DRAP recall databases and Sepolia Ethereum batch contracts.
          </p>

          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-8">
            <CheckCircle2 className="h-4 w-4 text-[#00E599]" />
            4. Contact & Identity Inquiries
          </h2>
          <p>
            For compliance questions or data deletion requests, direct correspondence to:
            <br />
            <span className="font-mono text-cyan-400">privacy@dartnexuslab.com</span> or <span className="font-mono text-cyan-400">contact@dartnexuslab.com</span>.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 font-mono text-xs text-zinc-500">
          Dart Nexus Lab • Lead: Ali Asghar • com.dartnexuslab
        </div>
      </div>
    </main>
  );
}

