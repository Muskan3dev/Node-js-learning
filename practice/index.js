/* Create a  folder named it Node
   Create a file in it named json and write data into it
   Update the data in the file.
   Read the data without getting buffer data at first
   file encoding
   Rename the file to jsonbio.txt
   Now delete the file and the folder
   */

const fs = require('fs');
//creating a directory
//fs.mkdirSync("node");
//creating a file inside the directory
//fs.writeFileSync("json.txt","Node js is runtime enviroment for javascript");
//Updating the  file content
fs.appendFileSync("practice/json.txt", "It is  built on chrome's V8 engine");