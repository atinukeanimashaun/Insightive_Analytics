/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {colors: {
      "primary" : "#FFFFFF",
      "secondary" : "#1E298D",
      "red" : "#922C40",
      "grey" : "#EFEFF2",
      "grey1" : "#F5F6FF",
      "grey2" : "#707070",
      "grey3" : "#828282",
      "grey3" : "#EDEDF6",
      "green" : "#16AF8E",
      "black" : "#121212",
      "lightBlue" : "#EEF6FF",
    }
  }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

