/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="light"]'],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1a1a1a",
        "primary-blue": "#3b82f6",
        "primary-purple": "#8b5cf6",
        "primary-emerald": "#10b981",
        "accent-gold": "#f59e0b",
        "text-light": "#ffffff",
        "text-dark": "#2c3e50",
        "text-gray": "#9ca3af",
        "text-muted": "#6b7280",
        "bg-light": "#ffffff",
        "bg-section": "#f8f9fb",
      },
      backdropBlur: {
        xs: "2px",
        xl: "20px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        blink: "blink 1s infinite",
        glow: "glow 2s ease-in-out",
        "type-writer": "typeWriter 3s steps(40, end)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 5px rgba(0, 255, 0, 0.3)" },
          "50%": { textShadow: "0 0 20px rgba(0, 255, 0, 0.8)" },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Yu Gothic Medium",
          "Meiryo",
          "メイリオ",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
        mono: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
