const mongoose = require('mongoose')
const Schema = mongoose.Schema

const templateSchema = new Schema({
  name: String,
  list: Array,
  bodyStyle: Object
})

module.exports = new mongoose.model(
  'template_list',
  templateSchema,
  'template_list'
)
