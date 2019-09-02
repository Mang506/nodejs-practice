const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json"); // renames file

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => { //moves file
  if (err) {
    throw err;
  }
});

setTimeout(() => {

  fs.unlinkSync("./assets/my-space-ship.jpg") // delete img

}, 4000);