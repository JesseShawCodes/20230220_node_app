const { dir } = require('console');
const fs = require('fs');

let directory_name = "your_files_here_2"
if (fs.existsSync(directory_name)) {
    console.log(`${directory_name} already exists`);
} 
else {
    createDirectory(directory_name)
}

function createDirectory(path) {
    fs.mkdir(path, (err) => {
        if(err) {
            console.log(`ERROR: ${err}`);
        }
        else {
            console.log(`${path} created`)
        }
    })
}
