const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("hello from the other side");
})

server.listen(800,"127.0.0.1",()=>{
    console.log("lishning at the port number 800")
})
