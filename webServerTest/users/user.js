/**
 * Created by Tory on 2017/6/10.
 */
'use strict'
let qstring = require('querystring');
let url = require('url');
let route = function (req, res) {

    var path=url.parse(req.url).pathname;
    if(path.indexOf('/login')!=-1){
        user.login(req,res);
    }
};

var user = {
    login: function (request,response) {
        var user=qstring.parse(url.parse(request.url).query);
        console.log(user.id);
    },
    addUser: function () {

    }
};
module.exports.route = route;