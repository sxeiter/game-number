'use strict';

function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  function makeGuess() {
    const guess =
    prompt('Введите число от 1 до 100 (или \'Отмена\' для выхода):');

    if (guess === null) {
      alert('Игра завершена.');
      return;
    }

    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      alert('Введи число!');
      makeGuess();
    } else if (parsedGuess < secretNumber) {
      alert('Больше!');
      makeGuess();
    } else if (parsedGuess > secretNumber) {
      alert('Меньше!');
      makeGuess();
    } else {
      alert('Правильно!');
      return;
    }
  }

  makeGuess();
}

guessNumber();
