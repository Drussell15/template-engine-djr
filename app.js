//node packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//required roles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//asking questions then create and push the list then start addmember.
//empty team to push new team members to
let teamList = [];

function managerPrompts() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "what is the Manager name: ",
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your identification number?",
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is your office phone number?",
        }
    ]).then(function (responses) {
        const manager = new Manager(answers.managerName, parseInt(answers.managerId), answers.managerEmail, answers.managerOffice)
        teamList.push(manager)
        console.log(teamList);
        addMember();
    })
        .catch(function (err) {
            console.log(err);
        });
    //Now we'll collect information from you about your engineer 
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "what is your engineer's name?"
            },
            {
                type: "input",
                name: "email",
                message: "what is your engineer's email?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "what is your engineer's Id Number?"
            },
            {
                type: "input",
                name: "github",
                message: "what is your engineer's github username?"
            }
        ]).then(function (responses) {
            //add engineer variables
            const engineer = new Engineer(answers.name, parseInt(answers.engineerId), answers.email, answers.github);
            //push to team list
            teamList.push(engineer);
            console.log(teamList);
            //run addMember functions
            addMember();
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "email",
                message: "what is intern email addy?"
            },
            {
                type: "input",
                name: "internId",
                message: "what is the intern id number?"
            },
            {
                type: "input",
                name: "school",
                message: "what school does your intern attend?"
            }
        ]).then(function (responses) {
            //add new intern variable
            const intern = new intern(answers.name, parseInt(answers.internId), answers.email, answers.school);
            //push to list
            teamList.push(intern);
            console.log(teamList);
            //run addMember
            addMember();
        })
    }
    //add new member function or end adding
    function addMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "type",
                message: "which type of member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I dont want to add anymore team members"
                ]
            }
        ]).then(function (responses) {
            //if engineer, addEngineer
            if (answer.type === "Engineer") {
                addEngineer();
                //if intern, add intern
            } else if (answer.type === "Intern") {
                addIntern();
            }
            //if no more adding render page
            else {
                const renderTeam = render(teamList);
                writeToFile(renderTeam);
            }
        })
    }
    function writeToFile(data) {
        fs.writeFile("./output/team.html", data, function (err) {
            if (err) {
                throw err;
            }
            console.log('HTML created! Check your output file!');
        })
    }
}
// this function will initiate
addManager();