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
      type: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your GitHub URL?",
      name: "github",
    },
  ])

  .then((data) =>
    fs.writeFile(
      "index.html",
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerry's Portfolio</title>
</head>
<body>
    <h1> Portfolio <h1>
    <p> My name is ${data.name}. I'm located in ${data.location}. My github URL is ${data.github}.</p>
</body>
</html>`,
      (err) => (err ? console.error(err) : console.log("Sucess!"))
    )
  );
