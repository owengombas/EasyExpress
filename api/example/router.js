const controller = require('./controller')

module.exports = [
  // "Object" way to define a route
  {
    method: 'get',
    route: '/',
    functions: controller.root
  },

  // "List" way to define a route
  ['get', '/a', [controller.functionA]],

  // Functions can be a array or not
  ['get', '/b', controller.functionB],

  // You can chain function, don't forget to call next() in functionA to call functionC
  ['get', '/master', [controller.functionA, controller.functionC]]
]
