const inquirer = require('inquirer');
const generatePage = require('./src/template');
const writeFile = require('./utils/generate');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

const app = () => {
  
  if (!this.array) {
  this.array = [];
  }

  this.newMember;
    
  inquirer.prompt([
    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter the employee’s name',
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter the employee’s id',
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter the employee’s email',
      },
      {
        type: 'list',
        name: 'employeeRole',
        message: 'What is your employee role',
        choices: ["Manager", "Engineer", "Intern"],
      }
  ]).then(data => {
    if (data.employeeRole ==="Manager"){
      this.newMember = new Manager(data.employeeName, data.employeeId, data.employeeEmail, data.employeeRole);

      inquirer.prompt([
        {
          type: 'input',
          name: 'officeNumber',
          message: 'Enter the employee office number',
        },
        {
          type: 'confirm',
          name: 'confirmEmployee',
          message: 'Would you like to add more employees?',
          default: false,
        }
      ]).then(data => {
        this.newMember.officeNumber = data.officeNumber;
        this.array.push(this.newMember);
        if (data.confirmEmployee) {
          return app();
        } else {
          return this.newMember;
        }
      });
    } else if (data.employeeRole ==="Engineer"){
      this.newMember = new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.employeeRole);

      inquirer.prompt([
        {
          type: 'input',
          name: 'gitHub',
          message: 'Enter the employee github',
        },
        {
          type: 'confirm',
          name: 'confirmEmployee',
          message: 'Would you like to add more employees?',
          default: false,
        }
      ]).then(data => {
        this.newMember.gitHub = data.gitHub;
        this.array.push(this.newMember);
        if (data.confirmEmployee) {
          return app();
        } else {
          return this.newMember;
        }
      });
    } else if (data.employeeRole ==="Intern"){
      this.newMember = new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.employeeRole);

      inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'Enter the employee school',
        },
        {
          type: 'confirm',
          name: 'confirmEmployee',
          message: 'Would you like to add more employees?',
          default: false,
        }
      ]).then(data => {
        this.newMember.school = data.school;
        this.array.push(this.newMember);
        if (data.confirmEmployee) {
          return app();
        } else {
          return this.array;
        }
      });
    }
  }).then(data => {
    return generatePage(data);
    
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  
};

app();