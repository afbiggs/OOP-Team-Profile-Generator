// generates the manager card
const generateManager = function (manager) {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>
    `;
};

// generates the engineer card
const generateEngineer = function (engineer) {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>
    `;
};

// generates the intern cards
const generateIntern = function (intern) {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
</div>

<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>
    `;
};

// push array to page 
generateHTML = (data) => {

// array for cards 
pageArray = []; 

for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 


    // call manager function
    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        pageArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        pageArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        pageArray.push(internCard);
    }    
}

// joining strings 
const employeeCards = pageArray.join('')

// return to generated page
const generateTeam = generateTeamPage(employeeCards); 
return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {  

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                // <!-Team Cards->
              ${employeeCards}
          </div>
      </div>
  </main>
`;
}

// export info to team.html
module.exports = generateHTML;