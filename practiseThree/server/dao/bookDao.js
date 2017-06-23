/**
 * Created by Tory on 2017/6/23.
 */
'use strict';
let mysql = require('mysql');
let dbconfig = require('./../dbconfig');
let bookDao = {
    getBookList: function (pagenation, callback) {
        let connection = mysql.createConnection(dbconfig.option);
        let sql = 'select * from book';
        connection.query(sql, [], function (error, result) {
            if(error){
                callback(-1);
            }else{
                callback(result);
            }
            connection.end();
        });
    }
};
module.exports = bookDao;
