import playGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default function prime() {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const randomNumber = Math.round(Math.random() * 100 + 1);

    const question = (`Question: ${randomNumber}`);
    const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    const gameRound = [question, rightAnswer];
    gameRounds.push(gameRound);
  }

  playGame(gameRules, gameRounds);
}
