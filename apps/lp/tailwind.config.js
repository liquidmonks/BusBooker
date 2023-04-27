module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-hero": "radial-gradient(farthest-corner at 20% 50%, #ffffffff 15%, #88A4BF 120%)",
    },
  },
},
  plugins: [],
}