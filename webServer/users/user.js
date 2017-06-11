/**
 * Created by lzhan on 2017/6/10.
 */
var qstring=require('querystring');
var url=require('url');

var userdao=require('./../dao/userDao');

var route=function (req,res) {
    var path=url.parse(req.url).pathname;

    if(path.indexOf('/login')!=-1){
        user.login(req,res);
    }else if(path.toLowerCase().indexOf('/adduser')!=-1){
        user.adduser(req,res);
    }
};

var user={
    login:function (request,response) {

        // console.log(url.parse(request.url).query);
        // var user=qstring.parse(url.parse(request.url).query);
        // console.log(user.id);

        var str_user='';
        request.on('data',function (_data) {
            str_user+=_data;
        });

        request.on('end',function () {
            var user=qstring.parse(str_user);
        //    dao
            userdao.login(user,function (res) {
                response.writeHead(200,{'content-type':'text/html;charset=utf8','Access-Control-Allow-Origin':'*'});
                response.end(res+'')
            })



        });

    },
    adduser:function (request,response) {
        var str_user='';
        request.on('data',function (_data) {
            str_user+=_data;
        });

        request.on('end',function () {
            var user=qstring.parse(str_user);
            //    dao
            userdao.addUser(user,function (res) {
                response.writeHead(200,{'content-type':'text/html;charset=utf8','Access-Control-Allow-Origin':'*'});
                response.end(res+'')
            })



        });

    }
};

module.exports.route=route;