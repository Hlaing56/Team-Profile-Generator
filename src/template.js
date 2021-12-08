const fs = require('fs');

function generate(data){
const page =
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
</head>

<header>
<h1>My Team</h1>
</header>
<div class="container">`


const managerCard = 
`<div class="card col-4 m-3 p-3">
    <h3>${data.role}:${data.name}</h3>
    ID: ${data.id}
    <br>
    Email: ${data.email}
    <br>
    Office Number: ${data.officeNumber}
    </div>`

const engineerCard = 
`<div class="card col-4 m-3 p-3">
    <h3>${data.role}:${data.name}</h3>
    ID: ${data.id}
    <br>
    Email: ${data.email}
    <br>
    gitHub: ${data.gitHub}
    </div>`

const internCard = 
`<div class="card col-4 m-3 p-3">
    <h3>${data.role}:${data.name}</h3>
    ID: ${data.id}
    <br>
    Email: ${data.email}
    <br>
    School: ${data.school}
    </div>
</div>`



fs.writeFile('./dist/index.html', page, err => {
    if (err) {
      reject(err);
      return;
    }
});

data = JSON.stringify(data);
data = JSON.parse(data);
switch(data.role){
    case "Manager": fs.appendFile('./dist/index.html', managerCard, err => {
        if (err) {
        console.log("sorry")
        }
    })
    break;
    case "Engineer": fs.appendFile('./dist/index.html', engineerCard, err => {
        if (err) {
        console.log("sorry")
        }
    })
    break;
    case "Intern": fs.appendFile('./dist/index.html', internCard, err => {
        if (err) {
        console.log("sorry")
        }
    })
    break;
    default:
        console.log("sorry");
    break;
}


}

module.exports = generate;