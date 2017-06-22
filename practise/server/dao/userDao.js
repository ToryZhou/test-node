/**
 * Created by Tory on 2017/6/22.
 */
'use strict';
let mysql = require('mysql');
let dbconfig = require('../dbconfig');

let userDao = {
    login: function (user, callback) {
        let sql = 'select count(*) as count from user where phone=? and password=?';
        let connection = mysql.createConnection(dbconfig.option);
        connection.query(sql, [user.phone, user.password], function (error, result) {
            if (error) {
                callback(-1);
            } else {
                callback(result[0].count);
            }
            connection.end();
        });

    },
    addUser: function (user, callback) {
        let sql = 'insert into user (phone,password) values(?,?)';
        let connection = mysql.createConnection(dbconfig.option);
        connection.query(sql, [user.phone, user.password], function (error, result) {
            if (error) {
                callback(-1);
            } else {
                callback(result);
            }
            connection.end();
        });
    }
};
module.exports = userDao;