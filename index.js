const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const createDirs = require("./helpers/createDirs");

inquirer
  .prompt([
    {
      type: "list",
      name: "langChoice",
      message: "Which language is this project in?",
      choices: [
        "Javascript (including node)",
        "Go",
        "Python",
        "Java",
        "C++",
        "C#",
        "C",
        "Kotlin",
        "Swift",
      ],
    },
    {
      type: "list",
      name: "nodeDependency",
      message: "What dependency manager are you using",
      choices: ["NPM", "Yarn"],
      when: (answers) => answers.langChoice === "Javascript (including node)",
    },
  ])
  .then((answers) => {
    // createDirs.createDirs();
  });
