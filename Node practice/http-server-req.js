const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    console.log(req.headers);
    // process.exit();   //used to stop the event loop
});
server.listen(3000);