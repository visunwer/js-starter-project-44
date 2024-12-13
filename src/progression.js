/* eslint-disable import/extensions */
import { randomNumber } from './random.js';

/* eslint-disable no-console */
export default () => {
  const startNumber = randomNumber(1, 20);
  const lengthNumber = randomNumber(5, 10);
  const stepNumber = randomNumber(1, 9);
  const questionIndex = randomNumber(2, stepNumber - 1);

  const progress = (start, step, length) => {
    const arr = [];
    for (let i = 1, j = start; i <= length; i += 1, j += step) {
      arr.push(j);
    }
    return arr;
  };

  const progressionArray = progress(startNumber, stepNumber, lengthNumber);
  const questionNumber = progressionArray[questionIndex];
  progressionArray[questionIndex] = '..';
  return [progressionArray.join(' '), String(questionNumber)];
};
