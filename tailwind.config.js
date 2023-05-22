/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#A7C7E7",
      secondary: "#FDFD96",
      white: "#ffffff",
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
