const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    schoolIs() {
        return this.school;
    }

    positionIs() {
        return 'Intern';
    }
}

module.exports = Intern;