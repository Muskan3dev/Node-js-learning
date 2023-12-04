const fs = require("fs");

//Creating file Asynchronously
fs.writeFile("read.txt", "chrome's V8 engine is written in C++", (err) => {
  console.log("File created successfully");
  console.log("error");
});

//Updating file content
fs.appendFile(
  "read.txt",
  " Node.js was initially written by Ryan Dahl in 2009 ",
  (err) => {
    console.log("Updated Successfully");
  }
);

//reading file content
 fs.readFile("read.txt","UTF-8",(err,data)=>{
    if(err){
        console.error(err);
    }
console.log({"data":data});
});
 
//rename file
fs.rename('read.txt','reading.txt',(err)=>{
    if(err){
        console.log(error);
    }
    console.log("Updated Successfully");
});