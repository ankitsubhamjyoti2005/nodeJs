var mysql = require('mysql');
var express = require('express');
var route = express.Router();
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: 'localhost',   // Just the hostname or IP address
    port: 3307,          // Specify the port separately
    user: 'root',
    password: "",
    database: 'hmsystem'
});

con.connect(function(err) {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        throw err;
    } else {
        console.log("You are connected to the database");
    }
});
