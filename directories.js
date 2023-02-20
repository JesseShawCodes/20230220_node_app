const fs = require('fs');

fs.readdirSync("./accounts").forEach((file) => {
    console.log(file);
    fs.renameSync(`./accounts/${file}`, `./library/${file}`)
})

console.log("Files Removed");
fs.rmdirSync("./accounts");
console.log("Foler Removed");
