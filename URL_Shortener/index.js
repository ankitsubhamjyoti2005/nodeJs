const express = require("express")
const urlRouter = require('./routers/url');

const app = express();
const PORT = 8001;

app.use("/url".urlRouter);
app.listen(PORT,() => console.log("server is started at port number :${PORT}"))



