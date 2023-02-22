// Intern constructor 
const Intern = require('../lib/Intern');

// This creates the intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Alex', 29, 'biggsaf@gmail.com', 'App State');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Alex', 29, 'biggsaf@gmail.com', 'App State');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Alex', 29, 'biggsaf@gmail.com', 'App State');

    expect(intern.getRole()).toEqual("Intern");
}); 


