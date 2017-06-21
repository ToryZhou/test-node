/**
 * Created by Tory on 2017/6/18.
 */
'use strict';
let mysql = require('mysql');
let dbconfig = require('./../dbconfig');

let bookDao = {
    getBookList: function (pagenation, callback) {
        let connection = mysql.createConnection(dbconfig.option);
        let page = parseInt(pagenation.page);
        let size = parseInt(pagenation.size);
        let type = parseInt(pagenation.type);
        let order = pagenation.order;
        let name = pagenation.name;
        let sql = 'select * from book where name like ? order by ' + order + ' desc limit ?,?';
        let sqlCount = 'select count(*) as count from book  where name like ?';
        let sqlParam = ['%' + name + '%', page * size, size];
        let sqlCountParam = ['%' + name + '%'];
        if (type > 0) {
            sql = 'select * from book where name like ? and book_type_id=? order by ' + order + ' desc limit ?,?';
            sqlCount = 'select count(*) as count from book  where name like ? and book_type_id=?';
            sqlParam = ['%' + name + '%', type, page * size, size];
            sqlCountParam = ['%' + name + '%', type];
        }
        connection.query(sql, sqlParam, function (error, data) {
            if (error) {
                console.log(error.message);
                callback(-1);
            } else {
                connection.query(sqlCount, sqlCountParam, function (errer, countData) {
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