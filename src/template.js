function generatePage(input) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
        <div class="card col-4">
        <h3>${input.employeeName}</h3>
        ID: ${input.employeeId}
        <br>
        Email: ${input.employeeEmail}
        <br>
        Office Number: ${input.officeNum}
        </div>
        </main>  
    </body>

    </html>
    `;

};

module.exports = generatePage;