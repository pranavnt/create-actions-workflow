const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

import { createDirs } from "./helpers/createDirs.js";

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
    {},
  ])
  .then((answers) => {
    createDirs();
  });
