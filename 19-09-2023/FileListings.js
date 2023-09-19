const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'File Listings');
console.log(dirPath);

for (let i = 0; i < 5; i++) {
    fs.unlinkSync(`${dirPath}/Omkar${i+1}.txt`,);
}
// console.log("The created files are ...");
// fs.readdir(dirPath ,(err , files)=>{
//     console.log(files);
// });
