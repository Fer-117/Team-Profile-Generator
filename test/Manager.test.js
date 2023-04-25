const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email", () => {
      const employee = new Manager("Karen", 1, "Manager@example.com", "01");

      expect(employee.name).toEqual("Karen");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("Manager@example.com");
    });
  });

  describe("Methods", () => {
    describe("getName", () => {
      it("should return the name of the employee", () => {
        const employee = new Manager("Karen", 1, "Manager@example.com", "01");

        expect(employee.getName()).toEqual("Karen");
      });
    });

    describe("getId", () => {
      it("should return the ID of the employee", () => {
        const employee = new Manager("Karen", 1, "Manager@example.com", "01");

        expect(employee.getId()).toEqual(1);
      });
    });

    describe("getEmail", () => {
      it("should return the email of the employee", () => {
        const employee = new Manager("Karen", 1, "Manager@example.com", "01");

        expect(employee.getEmail()).toEqual("Manager@example.com");
      });
    });

    describe("getRole", () => {
      it('should return "Manager"', () => {
        const employee = new Manager("Karen", 1, "Manager@example.com", "01");

        expect(employee.getRole()).toEqual("Manager");
      });
    });

    describe("getSchool", () => {
      it('should return the office number of the manager', () => {
        const employee = new Manager("Karen", 1, "Manager@example.com", "01");

        expect(employee.getOfficeNumber()).toEqual("01");
      });
    });
  });
});
