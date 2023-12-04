/* Create a  folder named it Html
   Create a file in it named dom and write data into it
   Update the data in the file.
   Read the data in string form
   file encoding
   Rename the file to dombio.txt
   Now delete the file and the folder
   */
const fs = require("fs");

//creating a folder named html
fs.mkdir("html",(err)=>{
if(err){
    console.error(err);
}
console.log("Directory created successfully");
});