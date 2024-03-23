#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber :number=Math.floor(Math.random()*10);
const answer= await inquirer.prompt([
    {
        name:"guessedNum",
        type:"number",
        message:"Please enter a value between 0-10",
    }
]);

if (randomNumber===answer.guessedNum){
    console.log("Congratulations! You've guessed the right number [*^-^*]!")
}else {
    console.log('You guessed the wrong number [~_~"]!\n Try again :( ')
}