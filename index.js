const inquirer = require('inquirer');
const generatePage = require('./src/template');
const writeFile = require('./utils/generate');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    }
  ]);
};


const promptProject = (portfolioData) => {

  // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  console.log(`
=================
Add a New Project
=================
`);

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
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
  ]).then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })