const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  fontSize: {
        xs: '1.08rem', // 0.9rem * 1.2
        sm: '1.28rem', // 1.07rem * 1.2
        base: '1.42rem', // 1.18rem * 1.2
        lg: '1.49rem', // 1.24rem * 1.2
        xl: '1.66rem', // 1.38rem * 1.2
        '1.5xl': '1.8rem', // 1.5rem * 1.2
        '2xl': '2.18rem', // 1.82rem * 1.2
        '3xl': '2.66rem', // 2.22rem * 1.2
        '4xl': '3.19rem', // 2.66rem * 1.2
        '5xl': '4.27rem', // 3.56rem * 1.2
        '6xl': '5.33rem', // 4.44rem * 1.2
        '7xl': '6.4rem', // 5.33rem * 1.2
        '8xl': '9rem', // 7.5rem * 1.2
        '9xl': '11.4rem', // 9.5rem * 1.2
      },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        sidebar: 'var(--sidebar)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)', // Couleur principale
          foreground: 'var(--primary-foreground)', // Couleur de texte principal
        },
        secondary: {
          DEFAULT: 'var(--secondary)', // Couleur secondaire
          foreground: 'var(--secondary-foreground)', // Couleur de texte secondaire
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      transitionDuration: {
        DEFAULT: '333ms',
      },
       transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
