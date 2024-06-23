const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/overview' ||pathName === '/') {
        res.end('Hello from the Overview!!!');
    } else if (pathName === '/product') {
        res.end('Helo welocme to Product Page!!!');
    }
    else{

        // Sending a status code
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header': 'Hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(3000, () => {
    console.log('Listening to request on port 3000');
});