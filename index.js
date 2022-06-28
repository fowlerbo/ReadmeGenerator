const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { createDecipheriv } = require("crypto");

const promptUser = () => {};
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
    message: "What are the instructionsto install your application?:\n\n",
  },
  {
    type: "input",
    name: "contributionInstructoins",
    message:
      "What are the contributors contribution install your application?:\n\n",
  },
  {
    type: "list",
    name: "projectLicense",
    message: "Which license applies",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "usageInstructions",
    message: "What are the instruction to use your application",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github?:",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?:",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("README.md file is created.");
  });
}

const init = async () => {
  let userInput = await promptUser();
  let markdownText = generateMarkdown(UserInput);
  writeToFile("README.md", markdownText);
};

// Function call to initalize app
init();
