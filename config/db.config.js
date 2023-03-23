'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_mysql_crud_db'
});

dbConn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database connection established!')
});

module.exports = dbConn;

