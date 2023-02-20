const fs = require('fs');

/*
fs.rename("./lib/notes.md", "./notes.md", (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log(" Move was successful")
    }
})
*/

fs.unlinkSync("./lib/collectAnswers.js");