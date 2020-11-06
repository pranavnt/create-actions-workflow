const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

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
  ])
  .then((answers) => {
    console.info("Answer:", answers.langChoice);
  });
