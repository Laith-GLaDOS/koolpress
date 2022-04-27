const express = require('express');
const server = express();
server.use(express.json());
server.disable('x-powered-by');

const req_methods_o = {
    GET: 1,
    HEAD: 2,
    POST: 3,
    PUT: 4,
    DELETE: 5,
    CONNECT: 6,
    OPTIONS: 7,
    TRACE: 8,
    PATCH: 9
};

function middleware_f(handler) { server.use(handler); }

function add_routes_f(routes) {
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].method = req_methods_o.GET)         server.get(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.HEAD)       server.head(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.POST)       server.post(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.PUT)         server.put(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.DELETE)   server.delete(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.CONNECT) server.connect(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.OPTIONS) server.options(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.TRACE)     server.trace(routes[i].path, routes[i].handler);
        if (routes[i].method = req_methods_o.PATCH)     server.patch(routes[i].path, routes[i].handler);
    }
}

function start_listening_f(port, start_msg) { server.listen(port, () => console.log(start_msg)); }

module.exports = {
    express_server: server,
    middleware: middleware_f,
    req_methods: req_methods_o,
    add_routes: add_routes_f,
    start_listening: start_listening_f
};