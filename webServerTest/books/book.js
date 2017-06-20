'use strict';
let url = require('url');
let querystring = require('querystring');
let bookDao = require('./../dao/bookDao');
let route = function (request, response) {
    let pathname = url.parse(request.url).pathname;
    if (pathname.indexOf('getBookList') !== -1) {
        book.getBookList(request,response);
    }
};

let book = {
    getBookList: function (request, response) {
        var pagenation = querystring.parse(url.parse(request.url).query);
        bookDao.getBookList(pagenation,function (data) {
            response.writeHead(200, {'content-type': 'text/html;charset=utf8', 'Access-Control-Allow-Origin': '*'});
            response.end(JSON.stringify(data));
            // response.end(data + '');
        });
    }
};
module.exports.route = route;