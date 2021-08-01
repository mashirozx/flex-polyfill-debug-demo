module.exports = ({ env, options }) => ({
  ...options,
  plugins: [
    require('autoprefixer')({}),
    require('flex-gap-polyfill')()
  ],
})