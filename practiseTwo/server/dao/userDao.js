/**
 * Created by toryzhou on 6/23/17.
 */
'use strict';

let mysql = require('mysql');
let dbconfig = require('./../dbconfig');

let userDao = {
    login: function (user, callback) {
        let connection = mysql.createConnection(dbconfig.option);

        let sql = 'select count(*) as count from user where phone = ? and password = ?';
        connection.query(sql, [user.phone, user.password], function (error, result) {
            if (error) {
                callback(-1);
            } else {
                callback(result[0].count);
            }
            connection.end();
        });
    }
};
module.exports = userDao;