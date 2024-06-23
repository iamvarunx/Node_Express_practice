const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    console.log(req.headers);
    res.end("HEllo from the Server");
    // process.exit();   //used to stop the event loop
});
server.listen(3000,()=>{
    console.log('Listening to request on port 3000')
});