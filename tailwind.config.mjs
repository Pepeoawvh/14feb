/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, fontFamily: {
        script: ['Dancing Script', 'cursive'], // Fuente para títulos o textos románticos
        serif: ['Playfair Display', 'serif'], // Fuente para textos principales
        sans: ['Inter', 'sans-serif'], // Fuente por defecto
        work: ['Work Sans', 'sans-serif'], // Fuente para textos secundarios
        quick: ['Quicksand', 'sans-serif'], // Fuente para textos secundarios
      },
    },
  },
  plugins: [],
};
