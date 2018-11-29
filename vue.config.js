const path = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )
  },
  outputDir: '../home',
  configureWebpack: {
    plugins: [
      new copyWebpackPlugin([
        {
          from: path.join(__dirname, './baidu_verify_lBiznfiSA0.html'),
          to: path.join(__dirname, '../home'),
          ignore: ['.*']
        },
        {
          from: path.join(__dirname, './google0ef37c0281fd9df0.html'),
          to: path.join(__dirname, '../home'),
          ignore: ['.*']
        }
      ])
    ]
  }
}
// 定义全局的stylus方法和变量
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, 'src/assets/stylus/*.styl')]
    })
}
