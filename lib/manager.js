// Code that defines and exports Manager class.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
