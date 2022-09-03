// Required program files
const fs = require('fs');
const { default: inquirer } = require('inquirer');
const inquier = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');



// List of Global Variables
var manager;
var engineerArray = [];
var internArray = [];


//Write functions that call each other instead of create For Loops

//Function that garthers manager data 
function generateManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Press Enter to Begin",
                name: "start"
            },
            {
                type: "input",
                message: "Please enter the Manager's name",
                name: "managerName"
            
            },
            {
                type: "input",
                message: "Please enter the Manager's id",
                name: "managerId"
            },
            {
                type: "input",
                message: "Please enter the Manager's email",
                name: "managerEmail",
            },
            {
                type: "input",
                message: "Please enter the Manager's office number",
                name: "managerOffice"
            }
        ])
}
        
        //THEN Build a manager object


// Gather engineer data
function generateEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is your Engineer's id?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is your Engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is your Engineer's GitHub username?",
                name: "engineerGithub" 

            }
        ])
}
        
        //THEN build an engineer object 

// Gather Intern data
function generateIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Intern's name?",
                name: "internName"
            
            },
            {
                type: "input",
                message: "What is your Intern's id?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is your Intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is your Intern's school?",
                name: "internSchool"
            }
        ])
}
      
        //THEN Build an intern object

//What type of team member would you like to add or are they done?
function nextTeamMember(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add more team members"],
                name: "addTeam" 
            }
        ])
}
        //inquier.prompt()
            //Engineer
            //Intern
            //I don't want to add more team members

//Generate the html and write the file 