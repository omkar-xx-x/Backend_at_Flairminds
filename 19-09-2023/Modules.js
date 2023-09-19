const readFile = require('fs').readFile;
const colors = require('colors');
readFile("new_file.txt", 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
