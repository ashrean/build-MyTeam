// html page layout

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
</html>`
}
// Render the deatails of the postitions of the employess on to the page
const renderMang = (managerInfo) => {
    return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${managerInfo.managerName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">ID: ${managerInfo.badgeID}</p>
      <p>Email: <a href="mailto:${managerInfo.email}"> ${managerInfo.email}</a> </p>
      <p class="card-text">Office Number: ${managerInfo.officePhone}</p>
      </div>
    </div>
`}

// Same for Engineer
const renderEngineer= (engineerInfo) => {
    return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${engineerInfo.engineerName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">ID: ${engineerInfo.engineerID}</p>
      <p>Email: <a href="mailto:${engineerInfo.engineerEmail}"> ${engineerInfo.engineerEmail}</a> </p>
      <p class="card-text">GitHub Username: ${engineerInfo.GitHub}</p>
      </div>
    </div>
`}

// Same for Intern
const renderInter= (internInfo) => {
    return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${internInfo.internName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p>Email: <a href="mailto:${internInfo.internEmail}"> ${internInfo.internEmail}</a> </p>
      <p class="card-text">School: ${internInfo.internSchool}</p>
      </div>
    </div>
`}
