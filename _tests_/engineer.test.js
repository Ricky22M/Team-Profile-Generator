// Using the Engineer constructor
const Engineer = require('../lib/Engineer');

// Checks to see if a new engineer object was created
test('creates a new engineer object', () => {
    const engineer = new Engineer('Ricky', 1, 'rmedina2004@outlook.com', 'Ricky22M');

    expect(engineer.github).toEqual(expect.any(String));
});

test('checks methods for engineer class', () => {
    const engineer = new Engineer('Ricky', 1, 'rmedina2004@outlook.com', 'Ricky22M');

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe('Engineer');
});