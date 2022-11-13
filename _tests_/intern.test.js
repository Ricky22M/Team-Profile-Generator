// Using the Intern constructor
const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('Ricky', 1, 'rmedina2004@outlook.com', 'UofU');

    expect(intern.school).toEqual(expect.any(String));
});

test('checks methods for intern class', () => {
    const intern = new Intern('Ricky', 1, 'rmedina2004@outlook.com', 'UofU');

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');
});