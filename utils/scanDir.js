const fs = require('fs')
const path = require('path')

module.exports = (root, cb) => {
  const files = fs.readdirSync(root)
  files.forEach(file => {
    const stats = fs.lstatSync(path.join(root, file))
    if (stats.isDirectory()) {
      cb(file)
    }
  })
}
