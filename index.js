const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const engineerQuestions = require("./prompts/engineerQuestions");
const internQuestions = require("./prompts/internQuestions");
const managerQuestions = require("./prompts/managerQuestions");

const employeesFile = "./src/employees.json";
let data = "[]";

if (!fs.existsSync(employeesFile)) {
  fs.writeFile(employeesFile, "[]", (err) => {
    if (err) console.error(err);
    else console.log("Created employees file");
  });
}

if (fs.existsSync(employeesFile)) {
  data = fs.readFileSync(employeesFile, "utf-8");
  if (!data.trim()) {
    data = "[]";
  }
}
const employees = JSON.parse(data) || [];

function saveEmployees() {
  // Write employees to file
  const data = JSON.stringify(employees, null, 2);
  fs.writeFile(employeesFile, data, "utf8", (err) => {
    if (err) console.error(err);
    else {
      console.log("Employees saved to file");
      askToCreateAnotherEmployee();
    }
  });
}

function createEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        inquirer.prompt(managerQuestions).then((managerAnswers) => {
          const manager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
          );
          const managerGetmethods = {
            name: manager.getName(),
            id: manager.getId(),
            role: manager.getRole(),
            email: manager.getEmail(),
            extra: manager.getOfficeNumber(),
          };
          console.log("Manager created successfully!");

          employees.push(managerGetmethods);
          saveEmployees();
        });
      } else if (answers.role === "Engineer") {
        inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const engineer = new Engineer(
            engineerAnswers.name,
            engineerAnswers.id,
            engineerAnswers.email,
            engineerAnswers.github
          );
          const engineerGetmethods = {
            name: engineer.getName(),
            id: engineer.getId(),
            role: engineer.getRole(),
            email: engineer.getEmail(),
            extra: engineer.getGithub(),
          };
          employees.push(engineerGetmethods);
          console.log("Engineer created successfully!");

          saveEmployees();
        });
      } else if (answers.role === "Intern") {
        inquirer.prompt(internQuestions).then((internAnswers) => {
          const intern = new Intern(
            internAnswers.name,
            internAnswers.id,
            internAnswers.email,
            internAnswers.school
          );
          const internGetmethods = {
            name: intern.getName(),
            id: intern.getId(),
            role: intern.getRole(),
            email: intern.getEmail(),
            extra: intern.getSchool(),
          };
          console.log("Intern created successfully!");

          employees.push(internGetmethods);
          saveEmployees();
        });
      }
    });
}

function askToCreateAnotherEmployee() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "createAnother",
        message: "Do you want to create another employee?",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.createAnother) {
        createEmployee();
      } else {
        console.log("Employees created successfully!");
        console.log(employees);
        generateHTML(employees);
      }
    });
}

if (require.main === module) {
  // This code will only be executed if this file is the main file being run by Node.js
  createEmployee();
}

/* --------------------- save the employee array information to a file --------------------- */
function generateHTML(employees) {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css">
      <title>My Company Employee List</title>
    </head>
    <body>
      <h1>My Company Employee List</h1>
      <div id="employeeContainer">
      <div id="managers">
        <h2>Managers</h2>
        <ul>
        
        `;
  employees.forEach((employee) => {
    if (employee.role === "Manager") {
      html += `<li class="name">${employee.name} <ul> <li>${employee.id}</li><li>${employee.email}</li><li>${employee.extra}</li></ul>`;
    }
  });
  html += `
    </ul>
    </div>
    <div id="engineers">
        <h2>Engineers</h2>
        <ul>
        
        `;
  employees.forEach((employee) => {
    if (employee.role === "Engineer") {
      html += `<li class="name">${employee.name} <ul> <li>${employee.id}</li><li>${employee.email}</li><li>${employee.extra}</li></ul>`;
    }
  });
  html += `
    </ul>
    </div>
    <div id="interns">
        <h2>Interns</h2>
        <ul>
        
        `;
  employees.forEach((employee) => {
    if (employee.role === "Intern") {
      html += `<li class="name">${employee.name} <ul> <li>${employee.id}</li><li>${employee.email}</li><li>${employee.extra}</li></ul>`;
    }
  });
  html += `
    </ul>
    </div>
    </div>
  </body>
  </html>
  `;

  fs.writeFile("./dist/employees.html", html, (err) => {
    if (err) console.error(err);
    else console.log("HTML file created successfully");
  });
}
