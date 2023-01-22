// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const runGenMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Provide a description of your project.',
    'How do you install your project?',
    'Enter usage information.',
    'How can people contribute?',
    'Please select a license.',
    'How is testing performed for this project?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, userInputs) {
    let markDown = runGenMarkdown(userInputs);

    fs.writeFile(fileName, markDown, function() {
        console.log('Success! README.md has been generated.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contribution',
                message: questions[4]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[5],
                choices: ['MIT', 'Apache 2.0', 'Unlicense']
            },
            {
                type: 'input',
                name: 'testing',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'username',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
                default: 'smith@example.com'
            }

        ])
        .then(function (answers){
            console.log(answers);
            writeToFile('README.md', answers)
        });
};

// Function call to initialize app
init();
