const Router = require('koa-router')
let home = new Router()
let { queryList } = require('./api')

home.get('/queryList', queryList)
module.exports = home
