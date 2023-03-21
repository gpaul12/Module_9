const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: ["HTML", "CSS", "Javascrpt", "MySQL"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
  ])
  .then((data) => {
    const filename = "info.txt";
    fs.writeFile(filename, JSON.stringify(data), (error) => {
      error ? console.log(error) : console.log("success");
    });
  });
