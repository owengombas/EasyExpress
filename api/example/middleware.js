module.exports = {
  // Called before all routes in "example"
  before: [
    (req, res, next) => {
      console.log('Before middleware called')
      next()
    }
  ],
  // Called after all routes in "example"
  after: [
    (req, res) => {
      console.log('After middleware called')
    }
  ]
}
