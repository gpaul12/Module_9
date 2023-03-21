const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])
  .then((response) =>
    fs.appendFile("log.txt", process.argv[2], (err) =>
      err ? console.error(err) : console.log("Success!")
    )
  );
