// The different types of portfiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Link to the create a new HTML
const createTeam = require('./src/display');

// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team 
let workForce = [];

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
                writeToFile();
                break;
        }
    });
}

// Prompt questions for the new itern to add them to the team
const newIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this new intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of this new intern?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address for this new intern?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school this new intern is from?',
        },
    ]).then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern (name, id, email, school);

        workForce.push(intern);
        typeOfEmployee();
    });
}

// Prompt questions for the new engineer to add them to the team
const newEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this new engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of this new engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address for this new engineer?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github account username for this new engineer?',
        },
    ]).then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer (name, id, email, github);

        workForce.push(engineer);
        typeOfEmployee();
    });
}

// Prompt questions for the new manager to add them to the team
const newManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this new manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of this new manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address for this new manager?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for this new manager?',
        },
    ]).then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        workForce.push(manager);
        typeOfEmployee();
    });
}

// Creating a new HTML file with user input from prompted questions
function writeToFile() {
    const newTeam = createTeam(workForce);

    fs.writeFile("./dist/index.html", newTeam, function (err) {
        if (err) throw err;
        console.log("New Team created!");
    });
}

// Starts prompts
typeOfEmployee();