/**
 * Created by lzhan on 2017/6/10.
 */
var http=require('http');
var qstring=require('querystring');
var url=require('url');

var user=require('./users/user');
http.createServer(function (request,response) {
    var _url=url.parse(request.url).pathname;
    if(_url.indexOf('/users')!=-1){
        user.route(request,response);
    }
}).listen(3000);