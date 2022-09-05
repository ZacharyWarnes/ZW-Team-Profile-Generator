const Employee = require("./Employee");

//Constructor class for Intern object

class Intern {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school= school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports= Intern;