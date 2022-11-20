#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

let userWin = true;

for (let i = 1; i <= 3; i += 1) {
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const operand1 = Math.round(Math.random() * 100);
  const operand2 = Math.round(Math.random() * 100);

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

  console.log(`Question: ${operand1} ${operator} ${operand2}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer.toString()) {
    console.log('Correct!');
  } else {
    userWin = false;
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (userWin) {
  console.log(`Congratulations, ${name}!`);
}
