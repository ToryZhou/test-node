/**
 * Created by Tory on 2017/6/18.
 */
'use strict';
let mysql = require('mysql');
let dbconfig = require('./../dbconfig');

let bookDao = {
    getBookList: function (pagenation, callback) {
        let connection = mysql.createConnection(dbconfig.option);
        let sql = 'select * from book where name like ? order by price desc limit ?,?';
        let sqlCount = 'select count(*) as count from book  where name like ?';
        let page = parseInt(pagenation.page);
        let size = parseInt(pagenation.size);
        let name = pagenation.name;
        connection.query(sql, ['%' + name + '%', page * size, size], function (error, data) {
            if (error) {
                console.log(error.message);
                callback(-1);
            } else {
                connection.query(sqlCount, ['%' + name + '%'], function (errer, countData) {

                    let count = countData[0].count;
                    let pageCount = Math.ceil(count / size);
                    let result = {page: page, size: size, bookList: data, count: count, pageCount: pageCount};
                    callback(result);
                    connection.end();
                });

            }
        })
    }
};
module.exports = bookDao;