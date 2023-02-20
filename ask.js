const fs = require("fs");

let answerStream;

let questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
]

let answers = [];

function ask(i) {
    console.log(`ask: ${i}`)
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.once("data", (data) => {
    let name = data.toString().trim();
    let fileName = `./${name}.md`;
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }
    answerStream = fs.createWriteStream(fileName)
    answerStream.write(`Question answers for ${name}\n======\n`)
    // Ask the first question

    // process.stdout.write(`\n\n\n ${questions[0]}`);
    // process.stdout.write(` > `);
})

process.stdin.on("data", (data) => {
    console.log("Ello...")
    let answer = data.toString().trim();

    answerStream.write(`Question: ${questions[answers.length]}\n`)

    answerStream.write(`Answer: ${answer}\n`, function() {
        if (answers.length < questions.length) {
            ask(answers.length);
        }
        else {
            process.exit();
        }
    })

    answers.push(answer);


})

process.on("exit", () => {
    console.log(answers)

    answerStream.close()
})

ask(answers.length)