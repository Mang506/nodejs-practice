const cp = require("child_process");

const questionsApp = cp.spawn("node", ["questions.js"]);

questionsApp.stdin.write("Matt \n");
questionsApp.stdin.write("places \n");
questionsApp.stdin.write("stuff \n");

questionsApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionsApp.on("close", () => {
  console.log(`question app process exited`);
});
