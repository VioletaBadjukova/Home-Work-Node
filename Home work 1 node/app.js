const fs = require('fs');
const path = require ('path');
const newPath = path.join(__dirname, "homework.txt");

fs.writeFile(newPath, "Hello from our first Node Homework", (err) => {
    if (err) throw err;
    console.log("File has be writen");
} )

fs.appendFile(newPath, 'Finished',  () => {
    console.log('File has been updated');
} );

fs.readFile(newPath, (err, data) => {
    if(err) throw err;
    console.log(data.toString());

})