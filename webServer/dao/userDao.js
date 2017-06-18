/**
 * Created by lzhan on 2017/6/10.
 */
var mysql=require('mysql');
var dbconfig=require('./../dbconfig');

var userdao={
    login:function (user,callback) {
        var client=mysql.createConnection(dbconfig.option);
        // var sql='select count(*) as count from user where user_id=? and user_password=?';
        var sql='select count(*) as count from user where phone=? and password=?';
        console.log(user);
        client.query(sql,[user.id,user.pass],function (error,result) {
            if(error){
                console.log(error.message);
                callback(-1);
                client.end();
                return;
            }

            callback(result[0].count);
            client.end();
        })
    },
    addUser:function (user,callback) {
        var client=mysql.createConnection(dbconfig.option);
        var sql='insert into user values(?,?)';
        console.log(user);
        client.query(sql,[user.id,user.pass],function (error,result) {
            if(error){
                console.log(error.message);
                callback(-1);
                client.end();
                return;
            }

            callback(result.affectedRows);
            client.end();
        })
    }
}

module.exports=userdao;