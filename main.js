const fs = require('fs');

//creating a new file
fs.writeFileSync("input.txt","JS is synchronous and Single threaded language");

//Appending the content in file
fs.appendFileSync("input.txt","JS is high level,interpreted scripting language");

//Read File content
const buf_data =fs.readFileSync("input.txt");
console.log(buf_data);
org_data=buf_data.toString();
console.log({"original Data":org_data});