//server
const http = require("http");

const myServer = http.createServer((req,res)=>{
    console.log(req.headers);
    res.end("hello from server")
});

myServer.listen(8000,()=>console.log("server started"));

