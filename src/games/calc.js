import playGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;

export default function calc() {
  const gameRules = 'What is the result of the expression?';
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const operand1 = Math.round(Math.random() * 100);
    const operand2 = Math.round(Math.random() * 100);

    const question = (`Question: ${operand1} ${operator} ${operand2}`);

    let rightAnswer = 0;

    switch (operator) {
      case '+':
        rightAnswer = operand1 + operand2;
        break;
      case '-':
        rightAnswer = operand1 - operand2;
        break;
      case '*':
        rightAnswer = operand1 * operand2;
        break;
      default:
        break;
    }

    const gameRound = [question, rightAnswer.toString()];

    gameRounds.push(gameRound);
  }

  playGame(gameRules, gameRounds);
}
