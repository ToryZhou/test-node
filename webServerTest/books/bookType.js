'use strict';
let url = require('url');
let querystring = require('querystring');
let bookTypeDao = require('./../dao/bookTypeDao');
let route = function (request, response) {
    let pathname = url.parse(request.url).pathname;
    if (pathname.indexOf('getBookTypeList') !== -1) {
        bookType.getBookTypeList(request,response);
    }
};

let bookType = {
    getBookTypeList: function (request, response) {
        bookTypeDao.getBookTypeList(function (data) {
            response.writeHead(200, {'content-type': 'text/html;charset=utf8', 'Access-Control-Allow-Origin': '*'});
            response.end(JSON.stringify(data));
        });
    }
};
module.exports.route = route;