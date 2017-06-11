'use strict'
let http = require('http');
let qstring = require('querystring');
let url = require('url');

let user = require('./users/user');

http.createServer(function (request, response) {

    var _url=url.parse(request.url).pathname;

    if(_url.indexOf('/users')!=-1){
        user.route(request,response);
    }
}).listen(3000);