const inquirer = require('inquirer')
const fs = require('fs')

// Requiring the classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const render = require('./src/renderHtml')
const internal = require('stream')
let team = [];



function managerInfo(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Who is the manager?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is their office phone number? Add ext number if available. ',
                name: 'officePhone',
            },
            {
                type: 'input',
                message: 'What is their employee ID number?',
                name: 'badgeID',
            },

        ])
            .then((response) => {
                const manager = new Manager(response.managerName, response.email, response.officePhone, response.badgeID)
                team.push(manager)

                addEmployee();
            })
}

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What employee do you want to add?',
                name: 'newEmployee',
                choices: [
                    'Engineer',
                    'Intern',
                    'None'
                ]
            }

        ])
        .then(response => {
            switch (response.newEmployee){
                case 'Engineer':

                    engineerInfo();
                    break;
                case 'Intern':

                    internInfo();
                    break;
                case 'None':
                    let teamData = render(team)
                    fs.writeFile('./src/team.html', teamData, (err) =>
                    err ? console.log(err) : console.log('Team has been created.'))
                    break;

            }
        })
}

const engineerInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Who is the engineer?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'What is their employee Id number?',
                name: 'engineerID',
            },
            {
                type: 'input',
                message: 'What is their Github username?',
                name: 'GitHub',
            },

        ])
        .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerEmail, response.engineerID, response.GitHub)
            team.push(engineer)

            addEmployee();
        })
}

const internInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Who is the intern?',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'What school do they attend?',
                name: 'internSchool',
            },
        ])
        .then((response) => {
            const intern = new Intern(response.internName, response.internEmail, response.internSchool)
            team.push(intern)

            addEmployee();
        })

}

managerInfo();
