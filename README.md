# Easy Express
Here is an example with mongoose.  

## Conventions
For each *main route* you must have a **router.js** and a **middleware.js** file  
other files aren't required but a controller.js is recommended, it can be a class or a object with functions, you can choose...  
Finaly for this example there is a model.js file for mongoose, it define my data model, the file is require in the controller.js file to manage data.

## How it works
The api/index.js automaticaly import middlewares, and route from your *main route* folder  
in this example there is a folder named *example*, you can access the routes with http://localhost:4000/api/example/routeName  

## Define route
You have two ways to define a route, with a list or an object, the example is in api/example/router.js

## Define middleware
A middleware.js file export an object with two properties, before and after, each property is a list of functions.  
