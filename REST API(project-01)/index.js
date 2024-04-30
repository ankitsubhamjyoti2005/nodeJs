const express = require('express');
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;

//Routes

//GET methos
app.get("/",(req,res)=>{
    res.end("go to '/users'");
})


app.use(express.urlencoded({extended :false}));

// give json respone for api request done by mobile application
app.get("/api/users",(req,res)=>{
    return res.json(users);
})

//give html response done by browsers
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});


//Post method
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
    console.log(user);
})

app.post("/api/users",(req,res) => {
    const body = req.body;
    console.log(body);
    
})

app.listen(PORT,()=>console.log("server is started"));
