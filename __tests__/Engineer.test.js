const Engineer= require('../lib/Engineer');

describe("Engineer", () =>{
    describe("Initialization", () => {
        it("Should return an object with name, id, email, and gitHub", () => {
            const obj = new Engineer("Tom", "2", "tomhanks@tomhanks.com", "TomHanks");

            expect(obj.name).toBe("Tom")
            expect(obj.id).toBe("2")
            expect(obj.email).toBe("tomhanks@tomhanks.com")
            expect(obj.gitHub).toBe("TomHanks")
        })
    })
    describe("getName", () => {
        it("Should return the name of the Engineer", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getName()).toBe("Tom")
        })
    })

    describe("getId", () => {
        it("Should return the ID of the Engineer", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getId()).toBe("2")
        })
    })

    describe("getEmail", () => {
        it("Should return the email of the Engineer", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getEmail()).toBe("tomhanks@tomhanks.com")
        })
    })
    describe("getRole", () => {
        it("Should return the role of the Engineer", () => {
            const obj = new Employee("Tom", "2", "tomhanks@tomhanks.com");

            expect(obj.getRole()).toBe("Engineer")
        })
    })
})