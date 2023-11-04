const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      metal: ["Metal", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('https://i.ibb.co/fSDLV4y/banner.jpg')",
      },
      colors: {
        saffron: "#FFA600",
        head: "#57C875",
        'sub-head': "#333333",
        details: "#888888",
      },
    },
  },
  plugins: [require("daisyui")],
});
