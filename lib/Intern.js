const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    // call parent constructor here:
    super(name, id, email);
    
    this.school = school;

    this.role = "Intern";

  }
}

module.exports = Intern;