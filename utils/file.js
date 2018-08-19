const fs = require('fs')
const path = require('path')

module.exports.scanDirSync = (root, cb) => {
  const files = fs.readdirSync(root)
  files.forEach(file => {
    const stats = fs.lstatSync(path.join(root, file))
    if (stats.isDirectory()) {
      cb(file)
    }
  })
}

module.exports.fileExistsSync = (root, file) => {
  return fs.existsSync(path.join(root, file))
}
