//create a guess number game print out the user score also.

let numRandom = Math.round(Math.random() * (100 - 1) + 1);
let score = 0;
let guess;
do {
    let inputNum = prompt("Guess the number between 1 and 100 and type 'exit' to end the game: ");
    if (inputNum === 'exit') {
        break;
    }
    guess = parseInt(inputNum)
    score++;
    if (guess < numRandom) {
        alert("Your guess is less than the Correct number. Try Again!");
    }
    else if (guess > numRandom) {
        alert("Your guess is Greater than the Correct number. Try Again!");
    }
    else if (guess == numRandom) {
        alert(`Congratulations! you got the number and your score is ${100 - (score)}`);
        if (confirm('Do you want to play again?')) {
            numRandom = Math.round(Math.random() * (100 - 1) + 1);
            score = 0;
        }
        else {
            break;
        }
    }
    else {
        alert("invalid input");
    }
}
while (true)