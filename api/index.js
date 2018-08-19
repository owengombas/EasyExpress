const expressRouter = require('express').Router
const router = expressRouter()
const scanDir = require('../utils/scanDir')

scanDir(__dirname, file => {
  // Run before api import
  const apiRouterConfig = require(`./${file}/router`)
  const middlewares = require(`./${file}/middleware`)
  const apiRouter = expressRouter()

  // Load "before" middlewares
  middlewares.before && middlewares.before.forEach(mw => apiRouter.use(mw))

  // Load routes
  apiRouterConfig.forEach(r => {
    const list = Array.isArray(r)
    const method = r[list ? 0 : 'method']
    const route = r[list ? 1 : 'route'] 
    let functions = r[list ? 2 : 'functions']
    functions = Array.isArray(functions) ? functions : [functions]
    apiRouter[method](route, ...functions)
  })

  // Load "after" middlewares
  middlewares.after && middlewares.after.forEach(mw => apiRouter.use(mw))

  // Import API
  router.use(`/${file}`, apiRouter)
  console.log(`API: ${file} imported`)
})

module.exports = router
