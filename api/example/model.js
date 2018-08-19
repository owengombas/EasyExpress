const mongoose = require('mongoose')

module.exports = mongoose.model('article', new mongoose.Schema({
  name: String
}))
