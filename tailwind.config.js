/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './projects/showcase/**/*.{html,ts,css,scss}',
    './projects/mycomp/ui-sdk/**/*.{html,ts,css,scss}',
    "./projects/mycomp/ui-sdk/button/src/**/*.{html,ts}",
    './projects/mycomp/ui-sdk/button/src/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
   
  ],
  corePlugins: {
    preflight: false,
  }
}

