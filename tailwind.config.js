/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#5B8DEF",
          secondary: "#8A5CF6",
          accent: "#1FD1A5",
          ink: "#0B1021",
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
