// Configuration for tailwind.css
const colors = require("tailwindcss/colors");

const customWidths = {};
for (let i = 1; i < 60; ++i) {
  customWidths[`${i}/60`] = `${(i / 60) * 100}%`;
}

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.liquid",
    "./src/**/*.md",
    ".eleventy.js", // We generate some markup in the shortcodes listed here.
  ],
  content: ["src/**/*.html", "src/**/*.liquid", "src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.red["700"],
              "&:hover": {
                color: colors.red["500"],
              },
            },
            pre: {
              borderRadius: 0,
            },
          },
        },
      },
      colors: {
        primary: {
          dark: "#e6b800",
          semidark: "#f2c200",
          DEFAULT: "#ffcc00",
        },
        light: "rgba(0,0,0,0.54)",
        gray: {
          100: "#f3f4f7",
        },
      },
      width: customWidths,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["group-hover", "group-focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
