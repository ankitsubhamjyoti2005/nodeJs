const fs = require('fs');
const { buffer } = require('stream/consumers');
fs.writeFileSync('read.txt','hello world');

fs.appendFileSync("read.txt","line2");

const b_date = fs.readFileSync("read.txt");
console.log(b_date.toString());

