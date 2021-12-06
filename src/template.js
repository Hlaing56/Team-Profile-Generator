// const generateProjects = projectsArr => {
//     return `
//     <div class="container">
//         ${projectsArr
//           .map(({ employeeName, employeeId, employeeEmail }) => {
//             return `
//             <div class="card col-4 m-3 p-3">
//         <h3>${employeeName}</h3>
//         ID: ${employeeId}
//         <br>
//         Email: ${employeeEmail}
//         </div>
//           `;
//           })
//         .join('')}
//     </div>
//     `;
// };

  
// module.exports = templateData => {
//     // destructure page data by section
//     const { projects} = templateData;
  
//     return `
//   <!DOCTYPE html>
//   <html lang="en">

//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
//     <title>Team Profile Generator</title>
//     <link rel="stylesheet" href="style.css">
//   </head>

//   <body>
//     <header>
//       <h1>My Team</h1>
//     </header>
//     <main>
//       ${generateProjects(projects)}
//     </main>  
//   </body>

//   </html>
//     `;
// };

function generate(data) {
 return`
 hello atleast this works
 `;
};

module.exports = generate;