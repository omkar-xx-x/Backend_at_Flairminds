const fs = require('fs');
const input = process.argv;
if(input[2] == 'add'){
    fs.writeFileSync(input[3] , input[4]);
    console.log("file created...");
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
    console.log("File deleted...");
}else{
    console.log("Wrong choice of actions...");
}