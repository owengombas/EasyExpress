const controller = require('./controller')

module.exports = [
  {
    method: 'get',
    route: '/',
    functions: controller.root
  },
  ['get', '/a', [controller.functionA]],
  ['get', '/b', [controller.functionB]],
  ['get', '/master', [controller.functionA, controller.functionC]]
]
