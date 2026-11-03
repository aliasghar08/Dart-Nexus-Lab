import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dart Nexus Lab | Autonomous Computational Systems & Physical Ground Truth",
  description:
    "Official workstation of Dart Nexus Lab by Ali Asghar (aliasghar08). Deterministic finite element mechanics, sub-millisecond edge neural surrogates, cryptographic supply-chain ledgers, and zero-commission transit.",
  keywords: [
    "Dart Nexus Lab",
    "Ali Asghar",
    "Structura Nexus",
    "Swift Ride",
    "Quantum Forge",
    "BlockGuard",
    "Finite Element Analysis",
    "PaiNN",
    "visionOS Glassmorphism",
  ],
  authors: [{ name: "Ali Asghar", url: "https://github.com/aliasghar08" }],
  openGraph: {
    title: "Dart Nexus Lab | Autonomous Computational Systems",
    description: "Physical ground truth engineering workstation. Zero wrapper AI.",
    url: "https://dartnexuslab.com",
    siteName: "Dart Nexus Lab",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05070B] text-zinc-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
