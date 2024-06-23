const http = require('http');
const url = require('url');
const fs = require('fs');

const data = fs.readFileSync('./dev-data/data.json','utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/overview' || pathName === '/') {
        res.end('Hello from the Overview!!!');
    } else if (pathName === '/product') {
        res.end('Helo welocme to Product Page!!!');
    } else if (pathName === '/api') {
        res.writeHead(200,{ 'Content-type':'application/json'});
        res.end(data);

    }
    else {
        // Sending a status code
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(3000, () => {
    console.log('Listening to request on port 3000');
});