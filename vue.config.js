const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('API', path.resolve(__dirname, 'src/api'))
  },

  devServer: {
    proxy: 'http://goldentest.website/api/'
  }
}
