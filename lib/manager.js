const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    officeNumberIs() {
        return this.officeNumber;
    }

    positionIs() {
        return 'Manager';
    }
}

module.exports = Manager;