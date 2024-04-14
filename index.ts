#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "Firstnumber"   },
    {message: "enter Second Number", type: "number", name: "Secondnumber" },
    {message: "select one of the operators to perform action", 
    type: "list", 
    name: "operators", 
    choices: [ "Addition", "Subtraction",  "Multiplication", "Devision",  ],
},
]);

// conditional statement

if (answer.operators === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
} 
else if (answer.operators === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operators === "Devision") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else {
    console.log("Please select valid operators")
}