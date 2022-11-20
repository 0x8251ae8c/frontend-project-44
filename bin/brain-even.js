#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let userWin = true;

for (let i = 1; i <= 3; i += 1) {
  const randomNumber = Math.round(Math.random() * 100 + 1);
  const rightAnswer = ['yes', 'no'][randomNumber % 2];
  console.log(`Question : ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer) {
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
