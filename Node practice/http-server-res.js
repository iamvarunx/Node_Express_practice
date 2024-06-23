import { createServer } from 'http';
import { writeFileSync } from 'fs';
 const server = createServer((req,res)=>{
    const url = req.url
    const method = req.method
    if(url=='/')
    {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Node practice</title></head>')
        res.write('<body><form action ="/message" method="POST"><input name="message"></input><button type="submit" >submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

   // redirect
    if(url==='/message' && method == 'POST'){                          //setting post in above form for submit
        writeFileSync('hello.text','dummy text')
        res.setHeader('Location','/')
        res.statusCode = 302;
        return res.end()
    }

    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Node practice</title></head>')
    res.write('<body>Hello from Node js server!</body>')
    res.write('</html>')
    res.end()
});
server.listen(4000)