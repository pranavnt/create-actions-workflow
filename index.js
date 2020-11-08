// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// inquirer prompt
inquirer
  .prompt([
    // language selection
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
    // dependency installation
    {
      type: "list",
      name: "nodeDependency",
      message: "What dependency manager are you using",
      choices: ["NPM", "Yarn"],
      when: (answers) => answers.langChoice === "Javascript (including node)",
    },
    // build command
    {
      type: "input",
      name: "buildCommand",
      message: "What is your build command",
    },
  ])
  .then((answers) => {
    // createDirs.createDirs();
  });
