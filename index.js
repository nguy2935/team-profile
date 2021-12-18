const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Inern = require("./lib/Intern");

const render = require("./lib/htmlRenderer");

const team = [];
addToTeam();

// team builder
addToTeam() {
    inquirer.prompt([
    {
        type: "list",
        name: "addEmployee",
        message: "Add an employee, or select 'Done.'.",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Done"
            ]
        }
    ])
}

// enter engineer's info when prompt
inquirer.promopt([
    {
        type: "input",
        name: "engineerName",
        message: "Engineer's Name:"
    },
    {
        type: "input",
        name: "engineerId",
        message: "Engineer's ID:"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's E-mail:"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Engineer's Github username:"
    }
])