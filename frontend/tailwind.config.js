/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        netflix: {
          red: 'hsl(var(--netflix-red))',
          'red-hover': 'hsl(var(--netflix-red-hover))',
          black: 'hsl(var(--netflix-black))',
          dark: 'hsl(var(--netflix-dark))',
          darker: 'hsl(var(--netflix-darker))',
          gray: 'hsl(var(--netflix-gray))',
          'light-gray': 'hsl(var(--netflix-light-gray))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          blue: 'hsl(var(--accent-blue))',
          cyan: 'hsl(var(--accent-cyan))',
          green: 'hsl(var(--accent-green))',
          purple: 'hsl(var(--accent-purple))',
          orange: 'hsl(var(--accent-orange))',
          gold: 'hsl(var(--accent-gold))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 hsla(0, 84%, 45%, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px hsla(0, 84%, 45%, 0.2)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease forwards',
        'fade-out': 'fade-out 0.3s ease forwards',
        'slide-up': 'slide-up 0.4s ease forwards',
        'slide-down': 'slide-down 0.4s ease forwards',
        'scale-in': 'scale-in 0.3s ease forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)',
        'gradient-nav': 'linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)',
      },
      boxShadow: {
        'card': '0 4px 16px hsla(0, 0%, 0%, 0.5)',
        'card-hover': '0 8px 32px hsla(0, 0%, 0%, 0.7)',
        'glow-red': '0 0 30px hsla(0, 84%, 45%, 0.4)',
        'glow-blue': '0 0 30px hsla(199, 89%, 48%, 0.4)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
