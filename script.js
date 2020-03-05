let greeting = 'Привет! Как тебя зовут?'
let name = prompt(greeting);


while (name == '' || name == null) {
    name = prompt(greeting);
}

alert(name + ' , я загадал число от 1 до 100. Попробуй отгадать его за найменьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал"');

let number = random(100)
let guess = prompt('какое число я загадал?');
let numberofGuesses = 1;

while (number != guess) {
    numberofGuesses = numberofGuesses + 1;
    if (number > guess) {
        guess = prompt('Мало. Попробуй еще раз');

    } else {
        guess = prompt('Много. Попробуй еще раз');
    }
}


alert('Ты угадал! Это число ' + number + '. Тебе понадобилось ' + numberofGuesses + ' попыток');