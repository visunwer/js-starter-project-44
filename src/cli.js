import readLineSync from 'readline-sync';

const greetings = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export { greetings };
