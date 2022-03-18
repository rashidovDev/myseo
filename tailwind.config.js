module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
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
      colors: {
        primary: '#8137ff',
        secondary: {
          DEFAULT: '#AA4DE3',
          hover: '#A23CE0',
        },
        grey: {
          DEFAULT: '#f9f8fb',
        },
        heading: '#101828',
        paragraph: '#667085',
      },
      backgroundImage: {
        hero: "url('/src/assets/img/hero-bg.png')",
        blurb: "url('/src/assets/img/blurb.png')",
      },
    },
  },
  plugins: [],
};
