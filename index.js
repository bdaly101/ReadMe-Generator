// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['Enter Project Title:','Enter Description:', 'Enter Installation Instructions:', "Enter Usage Information:", "Enter Contribution Guidelines:", "Enter Test Instructions:", "Choose a License:", "Enter Filename:", "Enter Email:", "Enter Github"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created a README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'testInstruct',
      message: questions[5],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: [
        "MIT License",
        "GNU General Public License v3.0",
        "Apache License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "Mozilla Public License 2.0",
        "The Unlicense"
      ],
    },
    {
        type: 'input',
        name: 'fileName',
        message: questions[7],
    },
    {
        type: 'input',
        name: 'email',
        message: questions[8],
    },
    {
        type: 'input',
        name: 'github',
        message: questions[9],
    },
      
  ])
  .then((data) => {
    //console.log(data);
    const newInfo = generateMarkdown(data);
    writeToFile(`${data.fileName}.md`, newInfo);

  });

};

// Function call to initialize app
init();

