/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "marine-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",

      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('/images/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/images/bg-sidebar-desktop.svg')",
        checkmark: "url('/images/icon-checkmark.svg')",
      },
    },
  },
  plugins: [],
};
