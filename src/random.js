const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export { randomNumber, randomOperator };
