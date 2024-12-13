const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};

const randomNumber = () => Math.abs(Math.round(Math.random() * 100 + 1));

export { randomNumber, randomOperator };
