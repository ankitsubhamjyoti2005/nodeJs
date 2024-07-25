var express = require("express");
var session = require("express-session");
var cookies = require("cookie-parser");
var path = require("path");
var ejs = require("ejs");
const multer  = require('multer');
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var expressValidator = require("express-validator");
var sweetalert = require("sweetalert2");
var bodyParser = require('body-parser');
const http = require("http");


//call db function
var db = require('./db_controller/db_controller.js');
var app = express();

app.set("view engine", 'ejs');
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookies());

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`The server is running at port ${PORT}`));
