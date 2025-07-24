/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: "hsl(0, 0%, 100%)",
      foreground: "hsl(240, 10%, 10%)",
      primary: "hsl(220, 90%, 56%)",
      "muted-foreground": "hsl(220, 15%, 50%)",
    },
  },
  plugins: [],
};
