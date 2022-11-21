import playGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;

export default function even() {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const randomNumber = Math.round(Math.random() * 100 + 1);

    const question = (`Question : ${randomNumber}`);
    const rightAnswer = ['yes', 'no'][randomNumber % 2];

    const gameRound = [question, rightAnswer];
    gameRounds.push(gameRound);
  }

  playGame(gameRules, gameRounds);
}
