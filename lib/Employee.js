class Employee {
    constructor(input) {
        this.name = input.employeeName;
        this.id = input.employeeId;
        this.email = input.employeeEmail;
    }

    printStats() {
        console.log(`name is ${this.name}`);
        console.log(`id is ${this.id}`);
        console.log(`${this.name} email is ${this.email}`);
    };

    // getName(){

    // };

    // getId(){

    // };

    // getEmail(){

    // };

    // getRole(){

    // };
}

module.exports = Employee;