const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/ams'
const template_list = require('./template_list')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB 连接错误：'))

mongoose.connect(url, { useNewUrlParser: true })

module.exports = { template_list }
