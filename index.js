// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

const promptUser = () => {};
//function to obtain answer from user.
//ask for the title, description, installation instructions
//usage instructions, licencse, contribution instructions, tests,
//github username, emal address.
return inquirer.prompt([
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?: ",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Describe your project. (Required): ",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "What are the instructionsto install your application?",
  },
  {
    type: "input",
    name: "contributionInstructoins",
    message: "What are the contributors contribution install your application?",
  },
  {
    type: "list",
    name: "projectLicense",
    message: "Which license",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function writeToFile(fileName, data) {}

// Function call to initialize app
init();

const init = async () => {
  let userInput = await promptUser();
  console.log(userInput);
};

// Function call to initalize app
init();
