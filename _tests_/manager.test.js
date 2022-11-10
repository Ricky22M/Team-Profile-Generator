// Using the Engineer constructor
const Manager = require('../lib/manager');

// Checks to see if a new manager object was created
test('creates a new manager object', () => {
    const manager = new Manager('Ricky', 45, 'rmedina2004@outlook.com', 6);

    expect(manager.officeNumber).toEqual(expect.any(String));
});

// Checks the value of the officeNumber value from officeNumberIs()
test('gets manager office number value', () => {
    const manager = new Manager('Ricky', 45, 'rmedina2004@outlook.com', 6);

    expect(manager.officeNumberIs()).toEqual(expect.stringContaining(manager.officeNumber.toString));
});

// Checks the position of manager with the positionIs()
test('gets position of manager', () => {
    const manager = new Manager('Ricky', 45, 'rmedina2004@outlook.com', 6);

    expect(manager.positionIs()).toEqual("Manager");
});