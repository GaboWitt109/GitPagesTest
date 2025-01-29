/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-rendivalores": "#029837",
        "primary-hover": "#0f6325",
        "secondary-rendivalores": "#2B394B",
        "tertiary-rendivalores": "#0082CE",
        "gradient-blue-start": "#0082CE",
        "gradient-blue-end": "#004167",
        "gradient-green-start": "#029837",
        "gradient-green-end": "#004D2B",
      },
      height: {
          "capital-description-image": '35rem'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
