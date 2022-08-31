const Manager = require('../lib/Manager');

const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Lee', 17, 'lee@gmail', 6);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Lee', 17, 'lee@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 