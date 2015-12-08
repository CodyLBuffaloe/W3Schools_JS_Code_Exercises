function guessTheNumber(){
    var num = Math.floor((Math.random() * 10) + 1);
    var guess = prompt("Guess a number between 1 & 10.");
    if(guess == num){
        console.log("Good work! It was "+num+"!");
    }else
    console.log("Not matched. You guessed "+guess+". The computer chose "+num+".");
};
guessTheNumber();