const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/template');
const writeFile = require('./utils/generate');

const promptProject = () => {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'employeeName',
        message: 'Enter the employee’s name',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the employee’s name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter the employee’s id',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the employee’s id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter the employee’s email',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the employee’s email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNum',
        message: 'Enter the employee’s office number',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the employee’s office number!');
            return false;
          }
        }
      }
    //   ,
    //   {
    //     type: 'list',
    //     name: 'license',
    //     message: 'Choose a license for your application from the list of options',
    //     choices: ['Apache', 'Boost', 'Eclipse']
    //   }
    ]);
};

promptProject()
.then(log => {
    return generatePage(log);
  })
  .then(pageREADME => {
    return writeFile(pageREADME);
  })
// .then((log) => {
//     new Manager(log).printStats();
// })