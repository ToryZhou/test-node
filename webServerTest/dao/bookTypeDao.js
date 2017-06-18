/**
 * Created by Tory on 2017/6/18.
 */
'use strict';
let mysql = require('mysql');
let dbconfig = require('./../dbconfig');

let bookTypeDao = {
    getBookTypeList: function (callback) {
        let connection = mysql.createConnection(dbconfig.option);
        let sql = 'select * from book_type';
        connection.query(sql,  function (error, data) {
            if(error){
                console.log(error.message);
                callback(-1);
            }else{
                callback(data);
            }
            connection.end();
        })
    }
};
module.exports = bookTypeDao;