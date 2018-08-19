# Easy Express
Here is an example with mongoose.  

## Conventions
For each *main route* you must have a **router.js** file. Other files aren't required but a controller.js is recommended, it can be a class or a object with functions, as you want...  Finally for this example there is a model.js file for mongoose, it defines my data model, the file is required in the controller.js file to manage data.  
You can also use a middleware.js file to define middlewares

## How it works
The api/index.js automatically import middlewares, and routes from your *main route* folder. In this example there is a folder named *example*, you can access the routes with http://localhost:4000/api/example/routeName  

## Defining routes
You have two ways to define a route; with a list or an object. An example can be found in api/example/router.js

## Defining middlewares
A middleware.js file export an object with two properties, before and after, each property is a list of functions.  
