import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070B",
        glass: {
          surface: "rgba(13, 17, 23, 0.65)",
          border: "rgba(255, 255, 255, 0.08)",
          specular: "rgba(255, 255, 255, 0.16)",
          hover: "rgba(255, 255, 255, 0.04)",
        },
        primaryCyan: "#00F0FF",
        quantumViolet: "#8A2BE2",
        transitEmerald: "#00E599",
        crypticAmber: "#FFB800",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "shimmer-sweep": "shimmerSweep 3s infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmerSweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
