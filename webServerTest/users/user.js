/**
 * Created by Tory on 2017/6/10.
 */
'use strict'
let qstring = require('querystring');
let url = require('url');
var userdao = require('./../dao/userDao');

var mysql = require('mysql');
var dbconfig = require('./../dbconfig');

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
        console.log(user.phone);
        var client = mysql.createConnection(dbconfig.option);
        var sql = 'select count(*) as count from user where phone=? and password=?';

        client.query(sql, [user.phone, user.password], function (error, result) {
            if (error) {
                console.log(error.message);
                callback(2);
                client.end();
                return;
            }
            console.log(result);

            // callback(result[0].count);
            client.end();
            response.writeHead(200, {'content-type': 'text/html;charset=utf8', 'Access-Control-Allow-Origin': '*'});
            response.end(result[0].count + '')
        });
    },
    addUser: function () {

    }
};
module.exports.route = route;