const cp = require("child_process");

const openChrome = "'/mnt/c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe'";

cp.exec("touch myFile", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

cp.exec("node readStream", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// cp.exec(`${openChrome} http://www.google.com`);
// cp.exec("ls");

// cp.exec("ls", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

// `${openChrome} http://www.google.com`
// cp.exec("mkdir test");