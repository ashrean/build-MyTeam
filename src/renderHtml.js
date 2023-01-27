

// testing new solution
// html page layout
const generateTeam = (team) => {
    const makeTeam = (employeeTeam) => {
        return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css">
    <title>Build The Team</title>
</head>
<body>
    <!-- Header -->
    <div class = "container-fluid">
        <div class="row">
            <div class="team-heading jumbotron mb-3 col-12">
                <h1 class="text-center"> My Team </h1>
            </div>
        </div>
    </div>
    <main>
    <div class="text-center p-3 mb-2 bg-info text-dark"> My Team</div>
        <div>
        <div class="row">
        ${employeeTeam}
        </div>
    </main>
    <script src="index.js"></script>
</body>
</html>`;
    };
    // Render the deatails of the postitions of the employess on to the page
    const renderMang = (managerInfo) => {
        return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${managerInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">ID: ${managerInfo.id}</p>
      <p>Email: <a href="mailto:${managerInfo.email}"> ${managerInfo.email}</a> </p>
      <p class="card-text">Office Number: ${managerInfo.officePhone}</p>
      </div>
    </div>
`;
    };
    // Same for Engineer
    const renderEngineer = (engineerInfo) => {
        return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${engineerInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">ID: ${engineerInfo.id}</p>
      <p>Email: <a href="mailto:${engineerInfo.email}"> ${engineerInfo.email}</a> </p>
      <p class="card-text">GitHub Username: ${engineerInfo.GitHub}</p>
      </div>
    </div>
`;
    };
    // Same for Intern
    const renderInter = (internInfo) => {
        return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${internInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">ID: ${internInfo.id}</p>
      <p>Email: <a href="mailto:${internInfo.email}"> ${internInfo.email}</a> </p>
      <p class="card-text">School: ${internInfo.school}</p>
      </div>
    </div>
`;
    };
    const html = [];
    html.push(
        team
            .filter((employee) => employee.getRole() === 'Manager')
            .map((manager) => renderMang(manager))
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === 'Engineer')
            .map((engineer) => renderEngineer(engineer))
            .join('')
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === 'Intern')
            .map((intern) => renderInter(intern))
            .join('')
    );
    return html.join('');
};
module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
`;
};
