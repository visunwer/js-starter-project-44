import readLineSync, { question } from "readline-sync";
import expressionResult from "./expressionResult.js";
import * as random from "./random.js";
import NOD from './NOD.js';

export default (intro, game) => {
  console.log("Welcome to the Brain Games!");
  const userName = readLineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(intro);
  for (let i = 0; i < 3; i += 1) {
    const number1 = random.randomNumber();
    const number2 = random.randomNumber();
    const operator = random.randomOperator();
    var win = false;

    if (game === "even") {
      var expected = number1 % 2 === 0 ? "yes" : "no";
      var questionStr = number1;
    } else if (game === "calc") {
      var expected = expressionResult(number1, operator, number2);
      var questionStr = `${number1} ${operator} ${number2}`;
    } else if (game === "gcd") {
      var expected = NOD([number1, number2]);
      var questionStr = `${number1} ${number2}`;
    }

    console.log(`Question: ${questionStr}`);

    const answer = readLineSync.question("Your answer: ");

    if (expected === answer) {
      console.log("Correct!");
      var win = true;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${expected}'`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } 
  if (win === true) { console.log(`Congratulations, ${userName}!`); };
};
