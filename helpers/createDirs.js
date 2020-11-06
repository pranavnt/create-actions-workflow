const fs = require("fs");
const path = require("path");

export function createDirs() {
  if (!fs.existsSync("./.github")) {
    fs.mkdirSync("./.github");
  } else {
    // .github folder exists
    console.log(".github dir exists");
  }

  if (!fs.existsSync(path.join("./.github", "workflows"))) {
    fs.mkdirSync(path.join("./.github/" + "workflows"));
  } else {
    // workflows folder exists
    console.log("workflows dir exists");
  }
}
