/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      screens: {
        // lg: '1000px',
        xl: '1200px',
      },
    },
    screens: {
      // pro: { min: '1080px', max: '1279px' },
      md: '768px',
      lg: '1024px',
      xl: '1367px',
      maxmd: {max: '767px'},
      maxlg: {max: '1023px'},
      maxxl: {max: '1366px'},
    },
    extend: {
      backgroundImage: {
        linearSupport:
          'linear-gradient(95deg, #FFF 0%, rgba(255, 255, 255, 0.79) 100%)',
        linearFlash:
          'linear-gradient(180deg, #02315D 26.21%, rgba(246, 187, 145, 0.55) 68.35%, rgba(255, 255, 255, 0.00) 105.67%)',
        linearFlashText:
          'linear-gradient(99deg, #FFF0D8 -58.6%, #E99207 95.15%)',
      },
      fontFamily: {
        svnGraphik: ['var(--font-svn-graphik)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'blue-50': '#EBF0F7',
        'blue-500': '#204265',
        'blue-600': '#153454',
        'blue-700': '#102841',
        'blue-800': '#0D1F33',
        'blue-900': '#0A1827',
        'brain-900': '#1A1A1A',
        'greyscaletext-5-div': '#ECECEC',
        'greyscale-20': '#A9A9A9',
        'greyscale-30': '#828282',
        'greyscale-40': '#6A6A6A',
        'greyscale-50': '#454545',
        'greyscale-60': '#3F3F3F',
        'greyscale-80': '#262626',
        'elevation-20': '#F8F8F8',
        'brown-50': '#F9F4F0',
        'brown-700': '#876849',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
