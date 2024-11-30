/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Barlow:['Barlow','sans-serif'],
      Lato:['Lato','sans-serif'],
      Poppins:['Poppins','sans-serif'],
      Pangolin:['Pangolin','cursive']
    },
    extend: {},
  },
  plugins: [],
}

// .barlow-thin {
//   font-family: "Barlow", sans-serif;
//   font-weight: 100;
//   font-style: normal;
// }


// .lato-thin {
//   font-family: "Lato", sans-serif;
//   font-weight: 100;
//   font-style: normal;
// }
