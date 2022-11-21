import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default function playGame(gameRules, gameRounds) {
  const name = greeting();
  console.log(gameRules);

  const gameResult = gameRounds.every((round) => {
    const QUESTION = 0;
    const ANSWER = 1;

    console.log(round[QUESTION]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === round[ANSWER]) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${round[ANSWER]}'.`);
    return false;
  });

  if (gameResult) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
