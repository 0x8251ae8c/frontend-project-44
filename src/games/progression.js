import playGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;

const makeProgression = () => {
  const result = [];

  const start = Math.round(Math.random() * 100 + 1);
  const size = Math.round(Math.random() * 5 + 5);
  const period = Math.round(Math.random() * 100 + 1);

  for (let i = 0; i < size; i += 1) {
    const number = start + period * i;
    result.push(number.toString());
  }

  return result;
};

export default function progression() {
  const gameRules = 'What number is missing in the progression?';
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const collection = makeProgression();
    const hidedPosition = Math.round(Math.random() * (collection.length - 1));

    const rightAnswer = collection[hidedPosition];
    collection[hidedPosition] = '..';

    const question = `Question: ${collection.join(' ')}`;
    const gameRound = [question, rightAnswer];

    gameRounds.push(gameRound);
  }

  playGame(gameRules, gameRounds);
}
