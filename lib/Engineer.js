const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
      // call parent constructor here:
      super(name);
      
    }
}

module.exports = Engineer;