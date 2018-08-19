const mongoose = require('mongoose')

// Export mongoose model
module.exports = mongoose.model('article', new mongoose.Schema({
  name: String
}))
