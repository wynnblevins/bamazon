require("dotenv").config();
const db = require('mysql');

var connection = db.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_SCHEMA
});
connection.connect();

connection.query('SELECT * FROM products;', 
    function (error, results, fields) {;
    console.log(results);
});

connection.end();