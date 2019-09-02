const collectAnswers = require("./lib/collectAnswers")

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you doing with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => {
  console.log(`qustion answered: ${answer}`);
});

answerEvents.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());
