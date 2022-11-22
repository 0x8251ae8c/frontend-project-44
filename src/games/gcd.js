import playGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;

const findGcd = (a, b) => {
  const minNumber = Math.min(a, b);
  let result = 1;

  for (let i = 2; i <= minNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }

  return result;
};

export default function gcd() {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number1 = Math.round(Math.random() * 100 + 1);
    const number2 = Math.round(Math.random() * 100 + 1);

    const rightAnswer = findGcd(number1, number2);

    const question = (`Question: ${number1} ${number2}`);
    const gameRound = [question, rightAnswer.toString()];

    gameRounds.push(gameRound);
  }

  playGame(gameRules, gameRounds);
}
