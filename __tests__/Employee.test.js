const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Lee', 17, 'lee@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

