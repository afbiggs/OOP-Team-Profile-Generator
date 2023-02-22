
const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Alex";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 47;
    const employeeInstance = new Employee("Alex", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "afbiggs73@gmail.com";
    const employeeInstance = new Employee("Alex", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Alex";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Gets ID through getID method.", () => {
    const testID = 47;
    const employeeInstance = new Employee("Alex", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Gets email through getEmail method.", () => {
    const testEmail = "afbiggs73@gmail.com";
    const employeeInstance = new Employee("Alex", 47, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Gets role through gerRole method.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Alex", 47, "afbiggs73@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
