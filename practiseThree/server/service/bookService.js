/**
 * Created by Tory on 2017/6/23.
 */
'use strict';
let url = require('url');
let querystring = require('querystring');
let bookDao = require('./../dao/bookDao');

let route = function (request, response) {
    let pathname = url.parse(request.url).pathname;
    if (pathname.indexOf('getBookList') !== -1) {
        bookService.getBookList(request, response);
    }
};

let bookService = {
    getBookList: function (request, response) {
        let pagenation = querystring.parse(url.parse(request.url).query);
        bookDao.getBookList(pagenation, function (result) {
            response.writeHead(200, {'content-type': 'text/html;charset=utf8', 'Access-Control-Allow-Origin': '*'});
            response.end(JSON.stringify(result));
        });
    }
};
module.exports.route = route;
