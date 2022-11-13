// Using the employee constructor
const Employee = require('../lib/Employee');

// creates new employee object
test('creates a new employee', () => {
    const employee = new Employee('Ricky', 1, 'rmedina2004@outlook.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('checks methods for employee class', () => {
    const employee = new Employee('Ricky', 1, 'rmedina2004@outlook.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});