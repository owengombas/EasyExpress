module.exports = {
  before: [
    (req, res, next) => {
      console.log('Before middleware called')
      next()
    }
  ],
  after: [
    (req, res) => {
      console.log('After middleware called')
    }
  ]
}
