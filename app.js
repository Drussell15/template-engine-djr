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
        .catch(funtion(err) {
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
                name: "internId";
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
            if(answer.type === "Engineer") {
                addEngineer();
                //if intern, add intern
            } else if (answer.type === "Intern") {
                addIntern();
            }
            //if no more adding render page
        else {
            const renderTeam= render(teamList);
            writeToFile(renderTeam);
        }
    })
}
function writeToFile(data) {

   <!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
         integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
         crossorigin="anonymous"
      />
      <script
         src="https://kit.fontawesome.com/ab3fd93a87.js"
         crossorigin="anonymous"
      ></script>
      <title>Team Roster</title>
   </head>
   <body>
      <div
         class="container-fluid bg-secondary text-center d-flex align-items-center justify-content-center"
         style="height: 20vh"
      >
         <div class="h1 text-white" style="display: inline-block;">
            My Team
         </div>
      </div>
      <div class="container mt-5">
         <div class="card-deck d-inline-flex justify-content-center">
            ${allCards}
         </div>
      </div>
   </body>
</html>
   `;

                fs.writeFile("./output/TeamRoster.html", fullHTML, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            }

managerPrompts();
            //     questions array

            //     const manager = [
            //         {
            //             type: "input",
            //             message: "please enter selected project manager's name.",
            //             name: "name"
            //         },
            //         {
            //             type: "input",
            //             message: " Enter selected manager ID number.",
            //             name: "num"
            //         },
            //         {
            //             type: "input",
            //             message: "please enter manager email address.",
            //             name: "email"
            //         },
            //         {
            //             type: "input",
            //             message: "please enter manager's office number.",
            //             name: "off"
            //         },
            //         {
            //             type: "list",
            //             message: "Please enter the next type of member you want to add.",
            //             name: "position",
            //             choices: [
            //                 "Engineer",
            //                 "Intern",
            //                 "I am finished adding members to my team"
            //             ]
            //         }
            //     ];

            //     const engineer = [
            //         {
            //             type: "input",
            //             message: "please enter name of engineer",
            //             name: "name"
            //         },
            //         {
            //             type: "input",
            //             message: "Please enter your engineer's ID number.",
            //             name: "num"
            //         },
            //         {
            //             type: "input",
            //             message: "Please enter your engineer's email.",
            //             name: "email"
            //         },
            //         {
            //             type: "input",
            //             message: "Please enter your engineer's GitHub username.",
            //             name: "git"
            //         },
            //         {
            //             type: "list",
            //             message: "Please enter the next type of team member you would like to add.",
            //             name: "position",
            //             choices: [
            //                 "Engineer",
            //                 "Intern",
            //                 "I am done creating my team."
            //             ]
            //         }
            //     ];
            //     const intern = [
            //         {
            //             type: "input",
            //             message: "Please enter your intern's name.",
            //             name: "name"
            //         },
            //         {
            //             type: "input",
            //             message: "Please enter your intern's ID number.",
            //             name: "num"
            //         },
            //         {
            //             type: "input",
            //             message: "Please enter your intern's email.",
            //             name: "email"
            //         },
            //         {
            //             type: "input",
            //             message: "Please enter your intern's school name.",
            //             name: "school"
            //         },
            //         {
            //             type: "list",
            //             message: "Please enter the next type of team member you would like to add.",
            //             name: "position",
            //             choices: [
            //                 "Engineer",
            //                 "Intern",
            //                 "I am done creating my team."
            //             ]
            //         }
            //     ];


            // }
            //         ]
//this webpage is supposed to generate a webpage that displays a teams basic info so that user can have quick assess to basic information.
//using inpuirer program will gather info about the dev team and create objects for each memeber (use correct classes)

//where to look for assistance
// dungeons and dragons character generator

//after user has entered employee inputs, call render 
//pass an array containing all employee objects
//the render functi will generate a block of html and return this- in form of templated divs for each member

//take the html file generated and write it to file named "team.html"
// in the output folder- use variable 'outPath' above target location.

//does folder exist? create it if not

//each type (manager, engineer, etc) has slightly different info
//write the code to answer all the required questions via inquirer depending on data type.

//build out classes first
//create employee class, then from this create the others

//test each class to verify if it generates object
