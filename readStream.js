const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8");

let fileText = "";

console.log("type something...");
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileText += data;
});

readStream.once("data", data => {
  console.log(data);
});

readStream.once("end", () => {
  console.log("finished reading file")
  console.log(`Read ${fileText.length -1} characters of text`)
});
