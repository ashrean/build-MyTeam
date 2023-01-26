const inquirer = require('inquirer')
const fs = require('fs')

// Requiring the classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const render = require('./src/renderHtml')
const internal = require('stream')
let team = []



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
