//Send Emails with Nodemailer using Ethereal in Node.js
const express = require('express');

const app = express();

app.get("/",function(req,res) {
    res.send("i am a server");
})

