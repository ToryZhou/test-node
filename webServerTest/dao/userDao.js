"use strict"
let mysql = require('mysql');
let dbconfig = require('./../dbconfig');

var userDao = {
    login: function (user, callback) {
        var client = mysql.createConnection(dbconfig.option);
        var sql = 'select count(*) as count from user where phone=? and password=?';
        client.query(sql, [user.phone, user.password], function (error, result) {
            if (error) {
                console.log(error.message);
                callback(2);
                client.end();
                return;
            }
            callback(result[0].count);
            client.end();
        });
    },
    addUser:function (user,callback) {
        let client = mysql.createConnection(dbconfig.option);
        let sql='insert into user(phone,password) values(?,?)';
        client.query(sql, [user.phone, user.password], function (error, result) {
            if (error) {
                console.log(error.message);
                callback(2);
                client.end();
                return;
            }
            callback(result[0]);
            client.end();
        });
    }
};

module.exports = userDao;