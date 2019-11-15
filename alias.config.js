const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      'utils': resolve('src/assets/utils/'),
      'api': resolve('src/modules/API.js')
    }
  }
}

