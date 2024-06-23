const http = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./replaceTemplate');


// only exceuted once while the server is loaded
const tempOverView = fs.readFileSync('./template-overview.html', 'utf-8');
const tempCard = fs.readFileSync('./template-card.html', 'utf-8');
const tempProduct = fs.readFileSync('./template-product.html', 'utf-8');

const data = fs.readFileSync('./data.json', 'utf-8');  //Sync ,because JSON file can be load at the begining itself.
const dataObject = JSON.parse(data);




const server = http.createServer((req, res) => {

    const {query,pathname} = url.parse(req.url ,true);
    
    //OverView page
    if (pathname === '/overview' || pathname === '/') {

        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');                      //returns array to convert to string use join('')
        
        // console.log(cardHtml);
        const output = tempOverView.replace(/{%PRODUCT_CARDS%}/g,cardHtml);
        res.end(output);

        //Product Page
    } else if (pathname === '/product') {

        const product = dataObject[query.id];
        res.writeHead(200, { 'Content-type': 'text/html' });
        const output = replaceTemplate(tempProduct,product);
        res.end(output);



        //API    
    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }

    //NOT FOUND   
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