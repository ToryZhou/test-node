/**
 * Created by Tory on 2017/6/22.
 */

'use strict'
let http = require('http');
let url = require('url');
let userService = require('./service/userService');
http.createServer(function (request, response) {
    let url2 = request.url;
    let pathname = url.parse(request.url).pathname;
    if(pathname.indexOf('users')!==-1){
        userService.route(request,response);
    }
}).listen(3000);