// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
// Write the class

class Engineer extends Employee {
  constructor(github, id, email) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return "GitHubUser";
  }
}

module.exports = Engineer;
