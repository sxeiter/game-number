let number = parseInt(Math.random() * 100);
guess(number);

function guess(num) {
    let answer = parseInt(prompt('Угадай число от 1 до 100'));
    if (answer > num) {
        alert('Ваше число больше загаданного');
    } else if(answer < num) {
        alert('Ваче число меньше загаданного');
    } else if (answer == num) {
        alert('Вы угадали!');
        return;
    } else {
        alert('Необходимо ввести число!')
    }
    guess(num);
}
guess(number);