// Using the Engineer constructor
const Engineer = require('../lib/engineer');

// Checks to see if a new engineer object was created
test('creates a new engineer object', () => {
    const engineer = new Engineer('Ricky', 45, 'rmedina2004@outlook.com', 'Ricky22M');

    expect(engineer.github).toEqual(expect.any(String));
});

// Checks the value of the github value from githubIs()
test('gets engineer github value', () => {
    const engineer = new Engineer('Ricky', 45, 'rmedina2004@outlook.com', 'Ricky22M');

    expect(engineer.githubIs()).toEqual(expect.stringContaining(engineer.github.toString));
});

// Checks the position of engineer with the positionIs()
test('gets position of engineer', () => {
    const engineer = new Engineer('Ricky', 45, 'rmedina2004@outlook.com', 'Ricky22M');

    expect(engineer.positionIs()).toEqual("Engineer");
});