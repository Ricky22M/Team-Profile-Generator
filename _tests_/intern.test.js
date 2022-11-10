// Using the Intern constructor
const Intern = require('../lib/intern');

// Checks to see if a new intern object was created
test('creates a new intern object', () => {
    const intern = new Intern('Ricky', 45, 'rmedina2004@outlook.com', 'UofU');

    expect(intern.school).toEqual(expect.any(String));
});

// Checks the value of the school value from schoolIs()
test('gets the interns school value', () => {
    const intern = new Intern('Ricky', 45, 'rmedina2004@outlook.com', 'UofU');

    expect(intern.schoolIs()).toEqual(expect.stringContaining(intern.school.toString));
});

// Checks the position of intern with the positionIs()
test('gets position of intern', () => {
    const intern = new Intern('Ricky', 45, 'rmedina2004@outlook.com', 'UofU');

    expect(intern.positionIs()).toEqual("Intern");
});