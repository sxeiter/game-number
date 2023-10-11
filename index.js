function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
  
    while (guess !== secretNumber) {
      guess = prompt("Введите число от 1 до 100 (или 'Отмена' для выхода):");
  
      if (guess === null) {
        alert("Игра завершена.");
        break;
      }
  
      guess = parseInt(guess);
  
      if (isNaN(guess)) {
        alert("Введи число!");
      } else if (guess < secretNumber) {
        alert("Больше!");
      } else if (guess > secretNumber) {
        alert("Меньше!");
      } else {
        alert("Правильно!");
      }
    }
  }
  
  guessNumber();