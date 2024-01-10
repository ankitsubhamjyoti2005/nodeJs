//Send Emails with Nodemailer using Ethereal in Node.js
const express = require('express');
let PORT = 500;
const app = express();


app.get("/",function(req,res) {
    res.send("i am a server");
})

const start = async () => {
    try{
        app.lishen(PORT,()=>{
            console.log("THE PORTAL IS LIVE");
        });
    }catch(error){}
};

start();