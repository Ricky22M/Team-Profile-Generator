// Using the employee constructor
const Employee = require('../lib/employee');

// creates new employee object
test('creates a new employee object', () => {
    const employee = new Employee('Ricky', 45, 'rmedina2004@outlook.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Checks the name from nameIS()
test('gets employee name', () => {
    const employee = new Employee('Ricky', 45, 'rmedina2004@outlook.com');

    expect(employee.nameIs()).toEqual(expect.any(String));
});

// Checks the ID from idIs()
test('gets employee ID', () => {
    const employee = new Employee('Ricky', 45, 'rmedina2004@outlook.com');

    expect(employee.idIs()).toEqual(expect.any(Number));
});

// Checks the email from emailIs()
test('gets employee email', () => {
    const employee = new Employee('Ricky', 45, 'rmedina2004@outlook.com');

    expect(employee.emailIs()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Checks the position from positionIs()
test('gets the employee position', () => {
    const employee = new Employee('Ricky', 45, 'rmedina2004@outlook.com');

    expect(employee.positionIs()).toEqual("Employee");
});