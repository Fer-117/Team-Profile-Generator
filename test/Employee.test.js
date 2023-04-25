const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email", () => {
      const employee = new Employee("John", 1, "john@example.com");

      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("john@example.com");
    });
  });

  describe("Methods", () => {
    describe("getName", () => {
      it("should return the name of the employee", () => {
        const employee = new Employee("John", 1, "john@example.com");

        expect(employee.getName()).toEqual("John");
      });
    });

    describe("getId", () => {
      it("should return the ID of the employee", () => {
        const employee = new Employee("John", 1, "john@example.com");

        expect(employee.getId()).toEqual(1);
      });
    });

    describe("getEmail", () => {
      it("should return the email of the employee", () => {
        const employee = new Employee("John", 1, "john@example.com");

        expect(employee.getEmail()).toEqual("john@example.com");
      });
    });

    describe("getRole", () => {
      it('should return "Employee"', () => {
        const employee = new Employee("John", 1, "john@example.com");

        expect(employee.getRole()).toEqual("Employee");
      });
    });
  });
});
