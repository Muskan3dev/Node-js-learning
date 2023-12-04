/* Create a  folder named it Html
   Create a file in it named intro and write data into it
   Update the data in the file.
   Read the data in string form
   file encoding
   Rename the file to introduction.txt
   Now delete the file and the folder
   */
const fs = require("fs");

//creating a folder named html
fs.mkdir("html", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Directory created successfully");
});

//creating a file inside the directory
fs.writeFile(
  "intro.txt",
  "Html stands for hypertext markup language",
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log("File created successfully");
  }
);

//update the data in the file
fs.appendFile(
  "intro.txt",
  " .It is used to make structure of web pages.",
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log("File Updated successfully");
  }
);

//rename the file
fs.rename("intro.txt", "introduction.txt", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("File renamed successfully");
});
