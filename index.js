//prompts to entre Manager's name
const inquirer = require('inquirer');
const fs = require("fs");

const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");

const generateHtml =  require("./Develop/util/generateHtml");

const team = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "please enter the Team Manager's Name?",
      },
      {
        type: "input",
      name: "id",
      message: "please enter the Team Manager's id?",
      },
      {
      type: "input",
      name: "email",
      message: "please enter the Team Manager's email?",
      },
      {
        type: "input",
        name: "office",
        message: "please enter the Team Manager's office Number?",
        },
      
  ]).then(function (data){
      const newManager = new Manager(data.name, data.id, data.email, data.office);
      team.push(newManager);
      addTeam();
    });

const addTeam = () =>{
  inquirer
  .prompt([
      {
      type: "list",
      name: "choice",
      message: "would you like to add your Team Mates?",
      choices:["Create a Engineer", "Create Intern", "Quit"],
      },
    ]).then((ans) => {
    switch (ans.choice) {
      case "Create a Engineer":
        addEngineer()
        break;
      case "Create Intern":
        addIntern()
        break;
      case "Quit":
        console.log(team);
        const htmlString = generateHtml(team);
        fs.writeFile(`./index.html`,htmlString,(err)=> {
          if(err){
            throw err
          }
        });
        console.log("Thanks, look in indexx.html");
        break;
        default:
        console.log("thanks for playing!");
        break;
    }
  });
}
            

 const addEngineer = () =>{
     inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Entre Engineer's name",
        },
        {
          type: "input",
          name: "id",
          message: "Entre Engineer's Id",
        },
        {
          type: "input",
          name: "email",
          message: "Entre Engineer's email",
        },
        {
          type: "input",
          name: "github",
          message: "Entre Engineer's Github username",
        },
        ]).then(function (data){
          const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
          team.push(newEngineer);
          addTeam();
         });
        
        }

const addIntern = () =>{
inquirer
.prompt([
  {
    type: "input",
    name: "name",
    message: "Entre Intern's name",
  },
  {
    type: "input",
    name: "id",
    message: "Entre Intern's Id",
  },
  {
    type: "input",
    name: "email",
    message: "Entre Intern's email",
  },
  {
    type: "input",
    name: "school",
    message: "Entre intern's school",
  },
  ]).then(function (data){
  const newIntern = new Intern(data.name, data.id, data.email, data.school);
  team.push(newIntern);
  addTeam();
  });
  }
     


