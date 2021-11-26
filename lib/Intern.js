const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
      // call parent constructor here:
      super(name);
      
    }
}

module.exports = Intern;