const fs = require("fs");

const text = fs.readFile("./assets/my-space-ship.jpg", (err, img) => {

  if (err) {
    console.log(`An error occurred: ${err.message}`);
    process.exit();
  }

  console.log("file contents loaded");
  console.log(img);
});
