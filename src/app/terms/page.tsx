import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service & IP Assertions | Dart Nexus Lab",
  description: "Platform terms, intellectual property assertions, and open-source licensing for Dart Nexus Lab software.",
};

export default function TermsPage() {
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
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00E599] mb-2">
            <FileText className="h-4 w-4" />
            TERMS OF COMPUTATION & IP
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Intellectual Property & Licensing Governance
          </h1>
          <p className="font-mono text-xs text-zinc-500 mt-2">
            Document Reference: DNL-TERMS-2026-V1 • Lead Architect: Ali Asghar (@aliasghar08)
          </p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 font-sans">
          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#00F0FF]" />
            1. Core IP & Algorithmic Ownership
          </h2>
          <p>
            Dart Nexus Lab is 100% self-funded and independently architected. All mathematical models, Direct Stiffness Matrix (DSM) solver source logic, PaiNN equivariant neural committee training routines, and NTAG 424 cryptographic handshake implementations hosted under the `com.dartnexuslab` namespace are independently developed and owned solely by Ali Asghar, with zero external corporate ownership, venture capital, or external funding influence.
          </p>

          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-8">
            <CheckCircle2 className="h-4 w-4 text-[#00F0FF]" />
            2. Professional Engineering Disclaimer (Structura Nexus)
          </h2>
          <p>
            Structura Nexus provides deterministic Direct Stiffness Matrix analysis benchmarking exactly against Timoshenko and Hibbeler theoretical models. However, calculations generated through the workstation must be formally reviewed and sealed by a licensed Professional Engineer (PE / SE) before physical construction.
          </p>

          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-8">
            <CheckCircle2 className="h-4 w-4 text-[#00F0FF]" />
            3. Open Source & Peer-to-Peer Rights (Swift Ride)
          </h2>
          <p>
            Swift Ride is committed to zero platform fees (0.0% take-rate). Independent drivers retain full sovereignty over their vehicles, passenger agreements, and cash ledgers.
          </p>

          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-8">
            <CheckCircle2 className="h-4 w-4 text-[#00F0FF]" />
            4. Inquiries & Technical Contact
          </h2>
          <p>
            Direct technical questions, academic verifications, or independent inquiries to:
            <br />
            <span className="font-mono text-cyan-400">contact@dartnexuslab.com</span>.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 font-mono text-xs text-zinc-500">
          Dart Nexus Lab • Target Domain: dartnexuslab.com • GitHub: @aliasghar08
        </div>
      </div>
    </main>
  );
}

