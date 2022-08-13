const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        back: '#1E1E1E',
        yellow: '#FBC625',
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        drone: ['"drone-ranger-pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
