const Koa = require('koa')
const router = require('./router')
const static = require('koa-static')
const path = require('path')
const staticPath = './static/'
const db = require('./utils/async-db')
const utils = require('./utils/')

var cors = require('koa2-cors')

const app = new Koa()

app.context.$db = db
app.context.$utils = utils

app.use(cors())
app.use(static(path.join(__dirname, staticPath)))
app.use(router.routes())
app.on('error', err => {
  console.error('server error', err)
})
app.listen(3000)
