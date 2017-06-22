'use strict'
let http = require('http');
let url = require('url');

let user = require('./users/user');
let book = require('./books/book');
let bookType = require('./books/bookType');

http.createServer(function (request, response) {
    var _url=url.parse(request.url).pathname;
    if(_url.indexOf('/users')!==-1){
        user.route(request,response);
    }else if(_url.indexOf('/books')!==-1){
        book.route(request,response);
    }else if(_url.indexOf('/bookTypes')!==-1){
        bookType.route(request,response);
    }
}).listen(3000);