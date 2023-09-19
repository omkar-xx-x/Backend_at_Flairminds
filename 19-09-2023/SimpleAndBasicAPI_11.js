const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200 , {
        'Content-Type' :  'application\json'
    });
    res.write(JSON.stringify({
        userName :  "Omkar Hirave",
        email : "omkarhirve05@gmail.com"
    }));
    res.end();
}).listen(2000);