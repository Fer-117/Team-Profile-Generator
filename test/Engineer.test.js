const Engineer = require("../lib/Engineer.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email", () => {
      const employee = new Engineer(
        "Rick",
        1,
        "Engineer@example.com",
        "Eng-117"
      );

      expect(employee.name).toEqual("Rick");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("Engineer@example.com");
    });
  });

  describe("Methods", () => {
    describe("getName", () => {
      it("should return the name of the employee", () => {
        const employee = new Engineer(
          "Rick",
          1,
          "Engineer@example.com",
          "Eng-117"
        );

        expect(employee.getName()).toEqual("Rick");
      });
    });

    describe("getId", () => {
      it("should return the ID of the employee", () => {
        const employee = new Engineer(
          "Rick",
          1,
          "Engineer@example.com",
          "Eng-117"
        );

        expect(employee.getId()).toEqual(1);
      });
    });

    describe("getEmail", () => {
      it("should return the email of the employee", () => {
        const employee = new Engineer(
          "Rick",
          1,
          "Engineer@example.com",
          "Eng-117"
        );

        expect(employee.getEmail()).toEqual("Engineer@example.com");
      });
    });

    describe("getRole", () => {
      it('should return "Engineer"', () => {
        const employee = new Engineer(
          "Rick",
          1,
          "Engineer@example.com",
          "Eng-117"
        );

        expect(employee.getRole()).toEqual("Engineer");
      });
    });

    describe("getGithub", () => {
      it('should return "Eng-117" the github username', () => {
        const employee = new Engineer(
          "Rick",
          1,
          "Engineer@example.com",
          "Eng-117"
        );

        expect(employee.getGithub()).toEqual("Eng-117");
      });
    });
  });
});
