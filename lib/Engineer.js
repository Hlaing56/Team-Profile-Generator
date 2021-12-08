const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub, role) {
      // call parent constructor here:
      super(name, id, email);
      
      this.gitHub = gitHub;

      this.role = "Engineer";

    }
}

module.exports = Engineer;