const http = require('http');
http.createServer((req , res)=>{
    res.write("<h1>Hello everyone , This is Omkar Hirave</h1>");
    res.write("<h1>calling this after the use of end method..");s
    res.end();
}).listen(4500);
