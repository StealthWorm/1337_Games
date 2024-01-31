/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.svg')",
        'custom-bg': "radial-gradient(rgba(0, 0, 0, 0) 1px, var(#ffff) 1px)"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        jomhuria: ['Jomhuria', 'sans-serif'],
        Ringbearer: ['Ringbearer', 'sans-serif'],
      },
      gridTemplateColumns: {
        'autofit': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      colors: {
        'green-primary-light': '#eaeceb',
        'green-primary-light-hover': '#e0e3e1',
        'green-primary': '#2d4537',
        'green-primary-hover': '#293e32',
        'green-primary-active': '#24372c',
        'green-primary-dark': '#223429',
        'green-primary-dark-hover': '#1b2921',

        'green-secondary-light': '#f3f8f2',
        'green-secondary-light-hover': '#edf5ec',
        'green-secondary': '#87bb80',
        'green-secondary-hover': '#7aa873',
        'green-secondary-active': '#6c9666',
        'green-secondary-dark': '#658c60',
        'green-secondary-dark-hover': '#51704d',

        'warning': '#FACA7E',
      },
      "boxShadow": {
        "custom": "0 0 20px #FACA7E, #FACA7E 0px 0px 20px inset"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

