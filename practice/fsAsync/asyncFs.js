const fs = require('fs');

//Creating file Asynchronously
fs.writeFile("read.txt","chrome's V8 engine is written in C++",(err) =>{
console.log("File created successfully");
});

