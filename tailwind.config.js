/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft 1s ease-out",
        slideRight: "slideRight 1s ease-out",
        slideUp: "slideUp 1s ease-out",
        rotate: "rotate 1s linear",
        slideIn: "slideIn 0.8s ease-out forwards",
        rollIn: "rollIn 0.5s ease-out forwards",
      },
      keyframes: {
        slideLeft: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        slideRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        slideIn: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        rollIn: {
          from: { transform: "translateX(-100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
