function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    return  randNum;
  }

var guessedNum = getRandomIntInclusive(1000, 9999);
console.log(guessedNum);


function game() {
    var guessNum = prompt("Input your guess of 4 digit number");
    if (guessNum == guessedNum) {
        console.log("Success!"); 
        return;
    }
    if (guessNum > guessedNum) {
        console.log("Your guess is too big");
        game();
    }
    if (guessNum < guessedNum)  {
        console.log("Your guess is too small");
        game();
    }
}
game();

/*while (true) {
    if (guessNum > guessedNum) {
        alert("Your guess is too big");
        guessNum = prompt("Input your guess of 4 digit number");
    }
    else if (guessNum < guessedNum)  {
        alert("Your guess is too small");
        guessNum = prompt("Input your guess of 4 digit number");
    }
    else
        guessedNum = getRandomIntInclusive(1000, 9999);
        console.log(guessedNum);
}*/



