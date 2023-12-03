const fs = require('fs');

//creating a new file
fs.writeFileSync("input.txt","JS is synchronous and Single threaded language");

//Appending the content in file
fs.appendFileSync("input.txt","JS is high level,interpreted scripting language");