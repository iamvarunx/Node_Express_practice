//Synchronous --  Blocking Code

const fs = require('fs');

const inputtxt = fs.readFileSync('../js practice/hello.txt','utf-8')
console.log(inputtxt)

const textOut = `After file Write ${inputtxt}.\n Created on ${Date.now()}`;
fs.writeFileSync('./output.txt',textOut);
console.log("File written!");