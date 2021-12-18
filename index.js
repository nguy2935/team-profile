const inquirer = require("inquirer");

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