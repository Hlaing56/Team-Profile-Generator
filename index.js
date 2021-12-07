const inquirer = require('inquirer');
const generatePage = require('./src/template');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const array = [];

const app = () => {

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

      const manager = new Manager(data.employeeName, data.employeeId, data.employeeEmail, data.employeeRole);

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
        manager.officeNumber = data.officeNumber;
        array.push(manager);
        if (data.confirmEmployee) {
          return app();
        } else {
          generatePage(manager);
        }
      })
    } else if (data.employeeRole ==="Engineer"){
      const engineer = new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.employeeRole);

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
        engineer.gitHub = data.gitHub;
        array.push(engineer);
        if (data.confirmEmployee) {
          return app();
        } else {
          generatePage(engineer)
        }
      })
    } else if (data.employeeRole ==="Intern"){
      const intern = new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.employeeRole);

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
        intern.school= data.school;
        array.push(intern);
        if (data.confirmEmployee) {
          return app();
        } else {
          generatePage(intern)
        }
      });
    }
  })
  
};

app();