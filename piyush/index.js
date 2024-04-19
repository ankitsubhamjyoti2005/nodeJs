// //server
// const http = require("http");
// const fs = require('fs');
// const url = require('url');

// const myServer = http.createServer((req,res)=>{
//     if(res.url === "/favicon.ioc") return res.end();
//     const log = '${Data.now()}: ${req.url} New request Recived\n'
//     const myUrl = url.parse(req.url,true);
    
//     fs.appendFile(log.txt,log ,(err,data)=>{
//         switch(myUrl.pathname){
//             case '/':
//                 res.end("home");
//                 break;
//             case '/about':
//                 const username = myUrl.query.myname;
//                 res.end("HI+${username}");
//                 break;
//         }
//     })
//     console.log(req.headers);
//     res.end("hello from server")
// });

// myServer.listen(8000,()=>console.log("server started"));

const http = require("http");
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New request Recived\n`;

    // Appending to log.txt
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Error appending to log:", err);
            return;
        }

        const myUrl = url.parse(req.url, true);

        switch (myUrl.pathname) {
            case '/':
                res.end("home");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`HI ${username}`);
                break;
            default:
                res.end("Invalid path");
        }
    });

    console.log(req.headers);
    // res.end("hello from server"); // Moved inside the fs.appendFile callback
});

myServer.listen(8000, () => console.log("server started"));
