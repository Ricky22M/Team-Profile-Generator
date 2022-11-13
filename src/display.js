/* Functions Used to determine the creation of a card */

// Display Intern Card
const createInternCard = intern => {
    return `
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary text-center d-flex flex-column">
            <div class="col">
                <h3>${intern.getRole()}</h3>
            </div>
            <div class="col">
                <h4>${intern.getName()}</h4>
            </div>
        </div>
        <div class="card-body">
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

// Display Engineer Card
const createEngineerCard = engineer => {
    return `
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary text-center d-flex flex-column">
            <div class="col">
                <h3>${engineer.getRole()}</h3>
            </div>
            <div class="col">
                <h4>${engineer.getName()}</h4>
            </div>
        </div>
        <div class="card-body">
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

// Display Manager Card
const createManagerCard = manager => {
    return `
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary text-center d-flex flex-column">
            <div class="col">
                <h3>${manager.getRole()}</h3>
            </div>
            <div class="col">
                <h4>${manager.getName()}</h4>
            </div>
        </div>
        <div class="card-body">
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

// Function used to get the cards together
const employeeTeam = employees => {
    let showEmployees = ''

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === "Intern") {
            showEmployees = showEmployees + createInternCard(employees[i])
        }
        if (employees[i].getRole() === "Engineer") {
            showEmployees = showEmployees + createEngineerCard(employees[i])
        }
        if (employees[i].getRole() === "Manager") {
            showEmployees = showEmployees + createManagerCard(employees[i])
        }
    } return showEmployees;
}

// Function used to create HTML with all employees

function createTeam(data) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="./assets/css/style.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
                <h1 class="jumbotron jumbotron-fluid text-center bg-danger text-white col">My Team</h1>
            </header>
            <main>
                <div class="d-flex justify-content-center col row">
                    ${employeeTeam(data)}
                </div>
            </main>
        </body>
    </html>
    `
}

module.exports = createTeam;