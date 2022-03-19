module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

