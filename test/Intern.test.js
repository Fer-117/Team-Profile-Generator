const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email", () => {
      const employee = new Intern(
        "Morty",
        1,
        "Intern@example.com",
        "University of Intern"
      );

      expect(employee.name).toEqual("Morty");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("Intern@example.com");
    });
  });

  describe("Methods", () => {
    describe("getName", () => {
      it("should return the name of the employee", () => {
        const employee = new Intern(
          "Morty",
          1,
          "Intern@example.com",
          "University of Intern"
        );

        expect(employee.getName()).toEqual("Morty");
      });
    });

    describe("getId", () => {
      it("should return the ID of the employee", () => {
        const employee = new Intern(
          "Morty",
          1,
          "Intern@example.com",
          "University of Intern"
        );

        expect(employee.getId()).toEqual(1);
      });
    });

    describe("getEmail", () => {
      it("should return the email of the employee", () => {
        const employee = new Intern(
          "Morty",
          1,
          "Intern@example.com",
          "University of Intern"
        );

        expect(employee.getEmail()).toEqual("Intern@example.com");
      });
    });

    describe("getRole", () => {
      it('should return "Intern"', () => {
        const employee = new Intern(
          "Morty",
          1,
          "Intern@example.com",
          "University of Intern"
        );

        expect(employee.getRole()).toEqual("Intern");
      });
    });

    describe("getSchool", () => {
      it('should return "University of Intern"', () => {
        const employee = new Intern(
          "Morty",
          1,
          "Intern@example.com",
          "University of Intern"
        );

        expect(employee.getSchool()).toEqual("University of Intern");
      });
    });
  });
});
