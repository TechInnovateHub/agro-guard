/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "main-bg": "#151517",
        "sidebar-bg": "#202021",
        "button-bg": "#202021",
        "hover-bg": "#414142",

        "text-clr": "#fff",
        "light-text-clr": "#77767b",
        "green-text-clr": "#59b47f",
        "red-text-clr": "#ff6364",
      },
      borderColor: {
        "green-border-clr": "#59b47f",
      }

    },
  },
  plugins: [],
}

