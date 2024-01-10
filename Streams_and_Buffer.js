//video - 21
const fs = require("fs");
const http = require("http");

const server = http.createServer();

// server.on('request',(req,res)=>{
//     var fs = require('fs');
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });
// });

server.listen(8000,"127.0.0.1");

server.on('request',(req,res)=>{
     const rstream = fs.createReadStream("input.txt");
     rstream.on('data',(chunk)=>{
        res.write(chunkdata);
     });
     rstream.on('end',()=>{
        Response.end();
     })

     rstream.on("ERROR",(err) =>{
        console,log(err);
        res.end("file not found");
     })
});

//video - 22
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream(input.txt);
    rstream.pipe(res);
});

