/**
 * Created by Tory on 2017/6/23.
 */
'use strict';
let http = require('http');
let url = require('url');
let userService = require('./service/userService');
let bookService = require('./service/bookService');

http.createServer(function (request, response) {
    let pathname = url.parse(request.url).pathname;
    if (pathname.indexOf('users') !== -1) {
        userService.route(request, response);
    } else if (pathname.indexOf('books') !== -1) {
        bookService.route(request, response);
    }
}).listen(3000);


