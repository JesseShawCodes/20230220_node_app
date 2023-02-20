
const fs = require("fs")

let ipsum = fs.readFile("./README.md", "utf-8", (err, file) => {
    if (err) {
        throw err
    }
    else {
        console.log(file)
    }
});

console.log("reading the file ...")

