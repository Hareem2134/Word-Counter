#!/usr/bin/env node

import inquirer from "inquirer";

let wordans: { sentence: string } = await inquirer.prompt([
  {
    name: "sentence",
    message: "Enter your sentence to count the words: ",
    type: "input",
  },
]);

let words = wordans.sentence.trim().split(" "); // Using regex to handle multiple spaces

console.log(words);
console.log("Your sentence word count is: ", words.length);
