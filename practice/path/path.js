//Path module-node:path module provide utilities for working with file and directory paths.
const path = require("path");

//dirname
console.log(
  path.dirname("C:UsersMuskanDesktopNode-js-learningpracticepractice-02")
);

//extension of the file
console.log(
  path.extname(
    "C:UsersMuskanDesktopNode-js-learningpracticepractice-02/path.js"
  )
);

//filename
console.log(
  path.basename(
    "C:UsersMuskanDesktopNode-js-learningpracticepractice-02/path.js"
  )
);

//parsing the path
const mypath = path.parse(
  "C:UsersMuskanDesktopNode-js-learningpracticepractice-02/path.js"
);
console.log(mypath);
