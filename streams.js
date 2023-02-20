
const fs = require('fs');

let stream = fs.createReadStream(
    "./chat-logs/george-ben-chat.log", 
    "utf-8"
);

let data;

stream.once("data", (chunk) => {
    console.log("Read stream started ...");
    console.log("==========================");
    console.log(chunk);

})

stream.on("data", (chunk) => {
    console.log(`chunk: ${chunk.length}`);
    data += chunk;
})

stream.on("end", () => {
    console.log(`finished ${data.length}`)
})

console.log("Reading the file...")