const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

// Requiring the classes
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

// Requiring the cards
const managerCard = require('./templates/managerhtml')
const engineerCard = require('./templates/engineerhtml')
const internCard = require('./templates/internhtml')

// Variable for everyone on team
const fullTeam = [];
