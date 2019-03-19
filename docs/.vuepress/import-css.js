module.exports = () => {
  let reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  reg.test(navigator.userAgent)
    ? require('song-vue-template/dist/css/svt.css')
    : require('song-vue-template/dist/css/p_svt.css')
  require('element-ui/lib/theme-chalk/index.css')
}
