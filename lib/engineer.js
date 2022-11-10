const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    githubIs() {
        return this.github;
    }

    positionis() {
        return 'Engineer';
    }
}

module.exports = Engineer;