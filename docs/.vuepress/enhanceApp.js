require('./import-css')()
const Svt = require('song-vue-template')
const ElementUI = require('element-ui')
export default ({ Vue }) => {
  Vue.use(Svt)
  Vue.use(ElementUI)
}
