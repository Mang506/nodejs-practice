const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you doing with node js? "
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;
  
  const questionAnswered = answer => {
    // stores all answers
    answers.push(answer);
    // asks second question through last
    if (answers.length < questions.length){
      rl.question(questions[answers.length], questionAnswered);
    } else {
      // all questions answers
      done(answers);
    }

  }

  // asks first question then callback function continues the remaining
  rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
