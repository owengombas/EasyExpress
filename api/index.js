const expressRouter = require('express').Router
const router = expressRouter()
const { scanDirSync, fileExistsSync } = require('../utils/file')

scanDirSync(__dirname, file => {
  // Run before api import
  const routerFile = `./${file}/router.js`
  const middlewareFile = `./${file}/middleware.js`
  if (fileExistsSync(__dirname, routerFile)) {
    // Load middlewares if middleware.js file exists
    const middlewares = fileExistsSync(__dirname, middlewareFile) && require(`./${file}/middleware`)
    const apiRouterConfig = require(routerFile)
    const apiRouter = expressRouter()

    // Load "before" middlewares
    middlewares.before && middlewares.before.forEach(mw => apiRouter.use(mw))
  
    // Load routes
    apiRouterConfig.forEach(r => {
      const list = Array.isArray(r)
      const method = r[list ? 0 : 'method'].toLowerCase()
      const route = r[list ? 1 : 'route'] 
      let functions = r[list ? 2 : 'functions']
      functions = Array.isArray(functions) ? functions : [functions]
      apiRouter[method](route, ...functions)
    })
  
    // Load "after" middlewares
    middlewares.after && middlewares.after.forEach(mw => apiRouter.use(mw))
  
    // Import API
    router.use(`/${file}`, apiRouter)
    console.log(`API: ${file} - IMPORTED ✅`)
  } else {
    console.log(`API: ${file} - router.js is required ❌`)
  }
})

module.exports = router
