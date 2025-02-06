// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents1 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents1);


const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
