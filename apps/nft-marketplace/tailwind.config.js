const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { url } = require('inspector');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1E1E1E',
        },
      },
    ],
  },
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        3: 'repeat(3, minmax(0, 1fr))',
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
      colors: {
        white: '#FFFFFF',
        back: '#1E1E1E',
        yellow: '#FBC625',
        navbar: '#da458f',
        navBackground: 'rgba(23, 22, 26, 0.7)',
        navLinearGradiant:
          'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)',
      },
      backgroundImage: {
        buttonGradient: {
          'nav-pattern':
            'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)',
        },
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        drone: ['"drone-ranger-pro"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              91.47: '91.47deg',
              98.24: '98.24deg',
              120: '120deg',
              135: '135deg',
            }
          ),
        }
      );
    }),
  ],
};
