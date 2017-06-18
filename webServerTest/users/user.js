/**
 * Created by Tory on 2017/6/10.
 */
'use strict';
let qstring = require('querystring');
let url = require('url');
var userDao = require('./../dao/userDao');

let route = function (req, res) {
    var path = url.parse(req.url).pathname;
    if (path.indexOf('/login') !== -1) {
        user.login(req, res);
    } else if (path.toLowerCase().indexOf('/adduser') !== -1) {
        user.addUser(req, res);
    }
};

var user = {
    login: function (request, response) {
        var user = qstring.parse(url.parse(request.url).query);
        userDao.login(user, function (res) {
            response.writeHead(200, {'content-type': 'text/html;charset=utf8', 'Access-Control-Allow-Origin': '*'});
            response.end(res + '')
        });
    },
    addUser: function (request,response) {

        var str_user='';
        request.on('data',function (_data) {
            str_user+=_data;
        });
        request.on('end',function () {
            var user=qstring.parse(str_user);
            userDao.addUser(user,function (res) {
                response.writeHead(200,{'content-type':'text/html;charset=utf8','Access-Control-Allow-Origin':'*'});
                response.end(res+'')
            })
        });

    }
};
module.exports.route = route;