/* eslint-disable no-console */
import readLineSync from "readline-sync";

export default () => {
  console.log("Welcome to the Brain Games!");
  const userName = readLineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    const numberIsEven = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    const answer = readLineSync.question("Your answer: ");

    if (numberIsEven === answer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberIsEven}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
