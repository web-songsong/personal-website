const Router = require('koa-router')
const home = require('./home/')

let router = new Router()

router.use('/home', home.routes(), home.allowedMethods())

module.exports = router
