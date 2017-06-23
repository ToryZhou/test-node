/**
 * Created by toryzhou on 6/23/17.
 */

'use strict';
let url = require('url');
let querystring = require('querystring');
let userDao = require('./../dao/userDao');

let route = function (request, response) {

    let pathname = url.parse(request.url).pathname;

    if (pathname.indexOf('login') !== -1) {
        userServic.login(request, response);
    }

};

let userServic = {
    login: function (request, response) {
        let user = querystring.parse(url.parse(request.url).query);
        userDao.login(user, function (result) {
            response.end(result + '');
        });

    },
    addUser: function (request, response) {

    }
};

module.exports.route = route;

