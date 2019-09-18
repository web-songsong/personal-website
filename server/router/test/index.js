const Router = require('koa-router')
let test = new Router()
const koaBodyform = require('../../utils/koa-body-form')

/* 查看活动列表 */
test.get('/getList', require('./getList'))

module.exports = test
