/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bni-red': '#CF2030',
        'bni-red-hover': '#a31a24',
        'bni-grey-sterling': '#C8C8C8',
        'bni-grey-light': '#F2F2F2',
        'bni-grey-granite': '#64666A',
        'bni-black': '#000000',
        'bni-white': '#FFFFFF',
      },
      borderRadius: {
        'bni': '4px',
      },
      boxShadow: {
        'bni': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'bni-hover': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        'sans': ["'Helvetica Neue'", 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.card-bni': {
          '@apply rounded-bni bg-bni-white p-6 border border-bni-grey-sterling/20 shadow-bni': {},
        },
      });
    },
  ],
};

export default config;
