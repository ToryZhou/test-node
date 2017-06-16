"use strict"
let mysql = require('mysql');
let dbConfig = require('./../dbconfig');

var userdao = {
    login: function (user, callback) {
        var client = mysql.createConnection(dbconfig.option);
        // var sql='select count(*) as count from user where user_id=? and user_password=?';
        var sql = 'select count(*) as count from user where phone=? and password=?';
        console.log(user);
        client.query(sql, [user.id, user.pass], function (error, result) {
            if (error) {
                console.log(error.message);
                callback(2);
                client.end();
                return;
            }

            callback(result[0].count);
            client.end();
        })
    }
};

module.exports = userdao;