module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#DC965A',
          hover: '#b87943',
        },

        grey: {
          DEFAULT: '#f9f8fb',
        },
        heading: '#101828',
        paragraph: '#878e99',
        footer: '#412B7F',
      },
      backgroundImage: {
        hero: "url('/src/assets/img/hero-bg.png')",
        blurb: "url('/src/assets/img/blurb.png')",
      },
    },
  },
  plugins: [],
};
