/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('./assets/images/bg-sidebar-desktop.svg')",
        "hero-phone": "url('./assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
