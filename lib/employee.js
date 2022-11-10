class Employee {
    constructor (name, id, email) {
        this.name,
        this.id,
        this.email
    }

    nameIs() {
        return this.name;
    }

    idIs() {
        return this.id;
    }

    emailIs() {
        return this.email;
    }

    positionIs() {
        return 'Employee';
    }
}

module.exports = Employee;