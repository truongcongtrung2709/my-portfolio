/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#A7C7E7",
      secondary: "#FDFD96",
      white: "#ffffff",
      background:"#EFEFEF",
      "red":"#ff6961 ",
      "green": "#C1E1C1",
      "bgOverlay":"rgba(0,0,0,0.5)",
      "black": "#000"
    },
    fontSize: {
      '2xs': '.4rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {
      height: {
        banner: "900px",
      },
      backgroundImage: {
        banner: "url('/images/banner.jpg')",
      },
      backgroundPosition: {
        bannerSize: "69%",
      },
    },
  },
  plugins: [],
};
