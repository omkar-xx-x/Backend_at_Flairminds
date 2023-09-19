const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'File Listings');
const filePath = `${dirPath}/pineapple.txt`;

// Writing to the file
fs.writeFileSync(filePath,"This is simple text file created to perform CRUD operations on file system...");

// Reading to the file 
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// Appending the file 
// fs.appendFile(filePath, 'and the file name which we are appending is apple.txt',(err)=>{
//     if(!err)
//         console.log("File is updated...");
//     else    
//         console.log("Something went missing....");
// })

// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// fs.rename(filePath,`${dirPath}/pineapple.txt`,(err)=>{
//     if(!err)
//         console.log("File name is now updated");
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);

