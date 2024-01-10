const express = require('express');

const bodyParser = require('body-parser')

const app = express();

  
app.get("/",function(req,res){
    res.send("welcome to day 10")
});

app.get("/about",function(req,res){
    res.send("welcome to about")
});

app.listen(3003,function(req,res){
    console.log("server is runing on port number 3003");
});