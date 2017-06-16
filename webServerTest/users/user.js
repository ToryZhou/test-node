/**
 * Created by Tory on 2017/6/10.
 */
'use strict'
let qstring = require('querystring');
let url = require('url');
var userdao = require('./../dao/userDao');
let route = function (req, res) {

    var path = url.parse(req.url).pathname;
    if (path.indexOf('/login') != -1) {
        user.login(req, res);
    } else if (path.toLowerCase().indexOf('/adduser') != -1) {
        user.adduser(req, res);
    }
};

var user = {
    login: function (request, response) {
        var user = qstring.parse(url.parse(request.url).query);
        console.log(user.id);
    },
    addUser: function () {

    }
};
module.exports.route = route;