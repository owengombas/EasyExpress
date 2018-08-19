const model = require('./model.js')

module.exports = {
  root (req, res, next) {
    console.log('Route /')
    res.send('Use the .../example/a or .../example/b route')
  },
  functionA (req, res, next) {
    console.log('Route A')
    res.send('route A, call after middleware')
    // Call next to execute functionC : /master
    // Call next to execute the after middleware functions : /a
    next()
  },
  functionB (req, res) {
    console.log('Route B')
    res.send('route B')
  },
  functionC (req, res, next) {
    console.log('Route C')
    next()
  }
}
