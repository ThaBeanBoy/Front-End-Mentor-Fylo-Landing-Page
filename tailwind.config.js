/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px',
      // Layout breakpoint
      'min-desktop-width': '542px',

      // index breakpoints
      'landing-breakpoint': '1128px',
      'actionables-breakpoint': '536px',
    },

    colors: {
      // Primary
      'very-dark-blue': 'hsl(243, 87%, 12%)',
      'desaturated-blue': 'hsl(238, 22%, 44%)',
      // Accent
      'bright-blue': 'hsl(224, 93%, 58%)',
      'moderate-cyan': 'hsl(170, 45%, 43%)',
      // Neutral
      'light-grayish-blue': 'hsl(240, 75%, 98%)',
      'light-gray': 'hsl(0, 0%, 75%)',

      err: 'hsl(339, 83%, 64%)',
    },

    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};
