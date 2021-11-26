const Employee = require('./Employee');

class Manager extends Employee {
    constructor(input) {
      // call parent constructor here:
      super(input);
      
      this.officeNumber = input.officeNum;
    }

    printStats() {
        console.log(`name is ${this.name}`);
        console.log(`id is ${this.id}`);
        console.log(`${this.name} email is ${this.email}`);
        console.log(`${this.officeNumber}`)
    };
}

module.exports = Manager;