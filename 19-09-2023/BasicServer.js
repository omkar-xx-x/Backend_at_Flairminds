// Getting the data from the userData file and displaying on the browser.
const http = require('http');
const userNames = require('./userData.js');

http.createServer((req,res)=>{
    res.writeHead(200 , {
        'Content-Type' :  'application\json'
    });
    res.write(JSON.stringify(userNames));
    res.end();
}).listen(2000);
