// rqeuire node modules to install
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// team profiles to generate
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Inern = require("./lib/Intern");

const pageRender = require("./src/pageRender");

const team = [];
addToTeam();

// team builder
addToTeam() {
    inquirer.prompt([{
        message: "Enter new team member's name",
        name: "name"
    },
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
        }]).then(function (userInput.addEmployee) {
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                break;
            }
        })
}

// manager
function addManager() { 
    inquirer.prompt ([
    
    {
        type: "input",
        name: "name",
        message: "Provide the Manager's name for this team",
        validate: nameResponse => {
            if(nameResponse) {
                return true;
            } else {
                console.log("Please enter the Manager's name");
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the Manager's ID.",
        validate: idInput => {
            if(idInput) {
                return true;
            }
            console.log("You must provide the Manager's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the Manager's email:",
        validate: emailInput => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if(emailInput) {
                return true;
            }
            console.log("Enter the manager's email.");
            return false;
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
        validate: managerOffice => {
            if(managerOffice) {
                return true;
            }
            console.log("Enter the manager's office number.");
            return false;
        }
    },

]).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamArray.push(manager);
    addToTeam();
});

}

// enter engineer's info when prompt
const addEngineer = inquirer.promopt([
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

// intern

const addIntern =