/**
 * Created by Tory on 2017/6/23.
 */
'use strict';
let url = require('url');
let querystring = require('querystring');
let userDao = require('./../dao/userDao');

let route = function (request, response) {
    let pathname = url.parse(request.url).pathname;
    if (pathname.indexOf('login') !== -1) {
        userService.login(request, response);
    } else if (pathname.indexOf('addUser') !== -1) {
        userService.addUser(request, response);
    }
};

let userService = {
    login: function (request, response) {
        let user = querystring.parse(url.parse(request.url).query);
        userDao.login(user, function (result) {
            response.writeHead(200, {'content-type': 'text/html;charset=utf8', 'Access-Control-Allow-Origin': '*'})
            // response.writeHead({'Access-Control-Allow-Origin': '*'});
            response.end(result + '');
        })
    },
    addUser: function (request, response) {
        let userStr = '';
        request.on('data', function (data) {
            userStr += data;
        });
        request.on('end', function () {
            let user = querystring.parse(userStr);
            userDao.addUser(user, function (result) {
                response.writeHead(200, {'content-type': 'text/html;charset=utr8', 'Access-Control-Allow-Origin': '*'});
                response.end(result + '');
            })
        });
    }
};

module.exports.route = route;
