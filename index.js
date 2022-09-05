// Required program files
const fs = require('fs');
const inquirer = require('inquirer');
const Manager= require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern= require('./lib/Intern');
const Employee= require('./lib/Employee');
const createHTML= require('./src/page-template')





// List of Global Variables
var manager;
var engineerArray = [];
var internArray = [];
var engineerProfile;
var internProfile;
var managerProfile= "";
var engineerProfiles="";
var internProfiles="";






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
        .then((response)=> {
            var {managerName, managerId, managerEmail, managerOffice} = response;
            manager = new Manager(managerName, managerId, managerEmail, managerOffice);
            nextTeamMember();
        })
}
        
      


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
        .then((response) => {
            var {engineerName, engineerId, engineerEmail, engineerGitHub} = response;
            var engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
            engineerArray.push(engineer);
            nextTeamMember();
        })
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
        .then((response)=> {
            var {internName, internId, internEmail, internSchool}=response;
            var intern= new Intern(internName, internId, internEmail, internSchool);
            internArray.push(intern);
            nextTeamMember();
        })
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
                    generatePage();
                    console.log("Hello is this working?")
                    break;
            }
        })
}


//This function generates the Manager Profile Card to be appended to HTML
function generateManagerProfile() {
    const name= manager.getName();
    const id= manager.getId();
    const email= manager.getEmail();
    const officeNumber= manager.getofficeNumber();
    const role= manager.getRole();

    managerProfile= `
    <div class="card>
        <div class="card-header bg-primary">
            <h4 class="card-title font-weight-bold text-white">${name}</h4>
            <p class="card-text text-white">${role}</p>
        </div>
        <div class="card-body>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Office number: ${officeNumber}</li>
            </ul>
        </div>
    </div>
    `
    return managerProfile;
}

//This function creates the template literal for the Engineer Profile to be pushed to the HTML page
function createEngineerProfile(name, id, email, github, role) {
    engineerProfile= `
    <div class="card>
        <div class="card-header bg-primary">
            <h4 class="card-title font-weight-bold text-white">${name}</h4>
            <p class="card-text text-white">${role}</p>
        </div>
        <div class="card-body>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">GitHub: <a href= "https://github.com/${github}"</li>
            </ul>
        </div>
    </div>
    `
    return engineerProfile;
}

//This function defines the dynamic variables in the createEngineerProfile function and iterates through the user's entries
function generateEngineerProfile() {
    for (var i =0; i < engineerArray.length; i++) {
        let engineers = engineerArray[i];
        let name = engineerArray.getName();
        let id = engineerArray.getId();
        let email = engineerArray.getEmail();
        let github = engineerArray.getGitHub();
        let role = engineerArray.getRole();
        engineerProfiles += createEngineerProfile(name, id, email, github, role);
    }
    return engineerProfiles;
}

//This function creates the template literal for the Intern Profile to be pushed up to the HTML page
function createInternProfile(name, id, email, school, role) {
    internProfile = `
    <div class="card>
        <div class="card-header bg-primary">
            <h4 class="card-title font-weight-bold text-white">${name}</h4>
            <p class="card-text text-white">${role}</p>
        </div>
        <div class="card-body>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">School: ${school} </li>
            </ul>
        </div>
    </div>
    `
    return internProfile;
}

//This function defines the dynamic variable in the createInternProfile function and iterages through the user's entries
function generateInternProfile() {
    for (var i =0; i < internArray.length; i++) {
        let interns = internArray[i];
        let name = internArray.getName();
        let id = internArray.getId();
        let email = internArray.getEmail();
        let school = internArray.getSchool();
        let role = internArray.getRole();
        internProfiles += createInternProfile(name, id, email, school, role);
    }
    return internProfiles;
}

//This function will create the html page showing the different employee profiles
function generatePage() {
    generateManagerProfile();
    generateEngineerProfile();
    generateInternProfile();
    createHTML(managerProfile, engineerProfiles, internProfiles);
    fs.writeFile('team.html', templateHTML, (err) =>
         err ? console.error(err) : console.log("Page has been successfully created")
    )

}

//Generate the html and write the file 
generateManager();

//Check global variables if profile cards aren't passing data through correctly********