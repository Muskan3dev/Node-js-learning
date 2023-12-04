//Path module-node:path module provide utilities for working with file and directory paths.
const path = require("path");

//dirname
console.log(path.dirname("C:\Users\Muskan\Desktop\Node-js-learning\practice\practice-02"));

//extension of the file
console.log(path.extname("C:\Users\Muskan\Desktop\Node-js-learning\practice\practice-02/path.js"));

//filename
console.log(path.basename("C:\Users\Muskan\Desktop\Node-js-learning\practice\practice-02/path.js"));