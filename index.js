const inquirer = require("inquirer");

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
        "Ruby on Rails",
      ],
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers.langChoice);
  });
