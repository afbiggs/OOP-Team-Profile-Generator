// Manager constructor 
const Manager = require('../lib/Manager');

// creates manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Alex', 21, 'biggsaf@gmail', 48);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Alex', 21, 'biggsaf@gmail', 48);

    expect(manager.getRole()).toEqual("Manager");
}); 