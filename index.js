// Required program files
const fs = require('fs');
const inquier = require('inquirer');
const Manager= require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern= require('./lib/Intern');
const Employee= require('./lib/Employee');




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

//This function runs after the Manager function and allows the user to choose to add a new Team Member and to choose which type
function nextTeamMember(){
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add more team members"],
                name: "addNew",
                default: "No new team members to add"
                
            }
        ])
//Takes the user choice and calls the cooresponding funtions above to run inquirer again
        .then((response) => {
            const addedEmployee = response.addNew;
            switch(addedEmployee) {
                case "Engineer":
                    generateEngineer();
                    break;
                case "Intern":
                    generateIntern();
                    break;
                case "I don't want to add more team members":
                    //This function will create the new page
                    // generatePage();
                    break;
            }
        })
}
        

//Generate the html and write the file 