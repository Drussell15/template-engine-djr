const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fsPromises = require("fs").promises;
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/Renderer");


//questions array

const manager = [
    {
        type: "input",
        message: "please enter selected project manager's name.",
        name: "name"
    },
    {
        type: "input",
        message: " Enter selected manager ID number.",
        name: "num"
    },
    {
        type: "input",
        message: "please enter manager email address.",
        name: "email"
    },
    {
        type: "input",
        message: "please enter manager's office number.",
        name: "off"
    },
    {
        type: "list",
        message: "Please enter the next type of member you want to add.",
        name: "position",
        choices: [
            "Engineer",
            "Intern",
            "I am finished adding members to my team"
        ]
    }
];

const engineer = [
    {
        type: "input",
        message: "please enter name of engineer",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your engineer's ID number.",
        name: "num"
    },
    {
        type: "input",
        message: "Please enter your engineer's email.",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter your engineer's GitHub username.",
        name: "git"
    },
    {
        type: "list",
        message: "Please enter the next type of team member you would like to add.",
        name: "position",
        choices: [
            "Engineer",
            "Intern",
            "I am done creating my team."
        ]
    }
];
const intern = [
    {
        type: "input",
        message: "Please enter your intern's name.",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your intern's ID number.",
        name: "num"
    },
    {
        type: "input",
        message: "Please enter your intern's email.",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter your intern's school name.",
        name: "school"
    },
    {
        type: "list",
        message: "Please enter the next type of team member you would like to add.",
        name: "position",
        choices: [
            "Engineer",
            "Intern",
            "I am done creating my team."
        ]
    }
];
        

    }
]
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