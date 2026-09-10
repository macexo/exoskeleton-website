import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary palette
        // Must be the rgb(var(--x) / <alpha-value>) form, otherwise Tailwind
        // emits nothing for opacity modifiers like bg-jet/90.
        jet: 'rgb(var(--jet-rgb) / <alpha-value>)',
        charcoal: 'rgb(var(--charcoal-rgb) / <alpha-value>)',
        // Warm off-white that all hairlines and low-alpha surfaces derive from.
        hairline: 'rgb(var(--hair) / <alpha-value>)',
        softWhite: '#F5F5F5',
        mutedGray: '#D4D4D4',
        // Gold system
        ashGold: '#BDA968',
        goldLight: '#d4c48a',
        goldDark: '#9a8954',
        // Accent colors
        mutedBlue: '#5DADE2',
        slateCyan: '#7FBEC8',
        dustyRose: '#B97C8F',
        steelRed: '#A14E4E',
        // Neutral scale
        neutral: {
          850: '#1a1a1a',
          950: '#0a0a0a',
        },
      },
      // next/font generates a hashed family name (e.g. __Exo_2_abc123) and
      // exposes it only through the CSS variable. Naming the family literally
      // as 'Exo 2' here never matched anything, so the body text silently fell
      // back to the browser default.
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInDown: "fadeInDown 0.8s ease-out forwards",
        slideInFromLeft: "slideInLeft 0.8s ease-out forwards",
        slideInFromRight: "slideInRight 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulseGlow: "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        gradientShift: "gradient-shift 3s ease infinite",
        spinSlow: "rotate-slow 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(189, 169, 104, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(189, 169, 104, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      // Three composites replace six unused glow tokens. Borders are drawn as
      // shadows so the outermost ring can be the page colour, which makes a
      // card read as cut out of the ground rather than floating on it.
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover':
          '0 0 0 1px rgb(189 169 104 / 0.35), 0 16px 40px -16px rgb(0 0 0 / 0.8), var(--ring-ground)',
        // Reserved for the primary CTA only. Alpha rises with radius.
        halo: '0 0 4px rgb(189 169 104 / 0.10), 0 1px 14px rgb(189 169 104 / 0.14), 0 3px 30px rgb(189 169 104 / 0.18)',
        // Universal top-edge highlight.
        lip: 'inset 0 1px 0 rgb(var(--hair) / 0.10)',
      },
      backdropBlur: {
        xs: '2px',
      },
      opacity: {
        '98': '0.98',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      // delay-400 / delay-600 / delay-900 were used 23 times across the site but
      // are not in Tailwind's default transition-delay scale, so every one of
      // those staggered reveals fired early.
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #BDA968, #d4c48a, #BDA968)',
        'dark-gradient': 'linear-gradient(180deg, #0D0D0D, #1C1C1E)',
        'hero-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
      },
      zIndex: {
        '15': '15',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
} satisfies Config;
