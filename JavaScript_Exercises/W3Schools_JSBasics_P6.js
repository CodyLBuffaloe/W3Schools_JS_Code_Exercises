function rWilliams(){
    var year = prompt("WHAT YEAR IS IT?!");
    if (year % 100 !== 0 && year % 4 == 0) {
        console.log("It's a leap year!");
    } else if (year % 400 == 0) {
        console.log("It's a leap year!");
    } else
        console.log("Not a leap year!");
}
