const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should return an object with name, id, and email values passed in", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");
            
            expect(obj.name).toBe("Tom")
            expect(obj.id).toBe("2")
            expect(obj.email).toBe("tomhanks@tomhanks.com")
        })
    })
    describe("getName", () => {
        it("Should return the name of the employee", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getName()).toBe("Tom")
        })
    })

    describe("getId", () => {
        it("Should return the ID of the employee", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getId()).toBe("2")
        })
    })

    describe("getEmail", () => {
        it("Should return the email of the employee", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getEmail()).toBe("tomhanks@tomhanks.com")
        })
    })
    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getRole()).toBe("Employee")
        })
    })
}) 