/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readLineSync from 'readline-sync';
import expressionResult from './expressionResult.js';
import * as random from './random.js';
import progression from './progression.js';
import isPrime from './isPrime.js';
import { NOD } from './NOD.js';

export default (intro, game) => {
  let expected;
  let questionStr;
  let win;

  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(intro);

  for (let i = 0; i < 3; i += 1) {
    const number1 = random.randomNumber(1, 100);
    const number2 = random.randomNumber(1, 100);
    const operator = random.randomOperator();
    win = false;

    if (game === 'even') {
      expected = number1 % 2 === 0 ? 'yes' : 'no';
      questionStr = number1;
    } else if (game === 'calc') {
      expected = expressionResult(number1, operator, number2);
      questionStr = `${number1} ${operator} ${number2}`;
    } else if (game === 'gcd') {
      expected = String(NOD(number1, number2));
      questionStr = `${number1} ${number2}`;
    } else if (game === 'progression') {
      [questionStr, expected] = progression();
    } else if (game === 'prime') {
      expected = isPrime(number1) ? 'yes' : 'no';
      questionStr = `${number1}`;
    }

    console.log(`Question: ${questionStr}`);

    const answer = readLineSync.question('Your answer: ');

    if (expected === answer) {
      console.log('Correct!');
      win = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (win === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};
