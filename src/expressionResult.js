/* eslint-disable default-case */
export default (number1, operator, number2) => {
  let math = 0;
  switch (operator) {
    case '+':
      math = number1 + number2;
      break;

    case '-':
      math = number1 - number2;
      break;

    case '*':
      math = number1 * number2;
      break;
  }
  return String(math);
};
