// Using the Engineer constructor
const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('Ricky', 1, 'rmedina2004@outlook.com', 10);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks methods for manager class', () => {
    const manager = new Manager('Ricky', 1, 'rmedina2004@outlook.com', 10);

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe('Manager');
});