# Welcome!  
You will just get started with Koolpress, how to install it, and stuff.  
NOTE: You do need some knowledge of how Express's route handler works (the `(req, res)` function)  
  
In Koolpress, only routing is changed and some stuff in Express is done by default (such as disabling the `x-powered-by` header)  
To make a Koolpress project, make a folder, open a terminal or command prompt in it, and run `npm init -y`  
(Make sure you have Node.js and NPM installed)  
Then, run `npm i koolpress` to install Koolpress.  
You're done! You made a Koolpress project, just make an index.js file to run your Koolpress app server in.  
Here's a template:  
```js
const koolpress = require('koolpress');
const GET = koolpress.req_methods.GET;

const index_route = {
    method: GET,
    path: '/',
    handler: (req, res) => res.status(200).set('Content-Type', 'text/html').send('<h1>Hello, World!</h1>')
};

const routes = [index_route];

koolpress.add_routes(routes);

koolpress.start_listening(3000, 'Server listening on port 3000');
```  
You can use ESM/MJS with Koolpress (in other words you can use `import` with Koolpress)  
The template does not use a recommended programming style, please seperate routes in different files if they are huge or you can make subroutes for a giant route (like `/html/`) in a file or something.  
Basically, you add all routes in an array, and every route object has 3 fields, `method`, `path`, and `handler`.  
They are pretty self-explanatory.  
Then you give the routes array to the `add_routes` function in Koolpress to register the routes.  
Start listening is self-explanatory, it listens on a port and prints a starting msg.  
One last function is the middleware function, you can add normal Express middleware with this function.  
```js
const koolpress = require('koolpress');
const GET = koolpress.req_methods.GET;

const index_route = {
    method: GET,
    path: '/',
    handler: (req, res) => res.status(200).set('Content-Type', 'text/html').send('<h1>Hello, World!</h1>')
};

const routes = [index_route];

const middleware_handler = (req, res, next) => {
    next();
    console.log(`${req.method} ${req.url}`);
}

koolpress.middleware(middleware_handler);

koolpress.add_routes(routes);

koolpress.start_listening(3000, 'Server listening on port 3000');
```  
`next();` is to allow Express to move on to processing the next request so it doesn't freeze the server.  
It depends on what you're doing to know where to put `next();` but since we are console.logging, we can safely call `next();` because we aren't doing anything to the response, and calling `next();` after console.logging might slow down the response a bit.  
And you're done! You just learned Koolpress!