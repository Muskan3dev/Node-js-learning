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
fs.mkdirSync("node");
//creating a file inside the directory
