/**
 * Created by Tory on 2017/6/10.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    // user     : 'me',
    // password : 'secret',
    // database : 'my_db'
    user     : 'root',
    password : 'root',
    database : 'test_node'
});
connection.connect();