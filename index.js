// The different types of portfiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Link to the create a new HTML
const display = require('.//src/display');

// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team 
let Workforce = [];

// To select the type of employee prompt
function typeOfEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'What type of employee will be added to your team?',
            choices: ['Intern', 'Engineer', 'Manager', 'End my team selection'],
        }
    ]).then(function (input) {
        switch(input.position) {
            case 'Intern':
                newIntern();
                break;
            case 'Engineer':
                newEngineer();
                break;
            case 'Manager':
                newManager();
                break;
            case 'End my team selection':
                console.log('Newly created Team in new HTML file!');
                break;
        }
    });
}
