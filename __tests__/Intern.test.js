const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Lee', 17, 'lee@gmail', 'WSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Lee', 17, 'lee@gmail', 'WSU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Lee', 17, 'lee@gmail.com', 'WSU');
    expect(intern.getRole()).toEqual("Intern");
}); 