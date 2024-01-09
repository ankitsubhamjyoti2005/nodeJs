const EventEmmiter = require("events");

const event = new EventEmmiter();
const web_page = new EventEmmiter();
//declare the event
event.on("sayMyName",()=>{
    console.log("my name is")
});

event.on("sayMyName",()=>{
    console.log("your name is")
});

event.on("theirName",()=>{
    console.log("their team name is")
});

//cheak the status code
event.on("checkPage",(sc,msg) => {
    console.log('status code of the page is ${sc} and the page is ${msg}');
});

// call the event
event.emit("sayMyName");

event.emit("checkPage",200,"ok");

 