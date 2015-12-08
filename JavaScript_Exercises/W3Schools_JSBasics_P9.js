function xmasCountdown(){
    var today = new Date();
    var xmas = new Date(today.getFullYear(), 11, 25);
    if(today.getMonth() == 11 && today.getDay() > 25){
        xmas.setFullYear(xmas.getFullYear() + 1);
    }
    var singleDayInMilliseconds = 1000 * 60 * 60 * 24; //milliseconds*seconds*minutes*hours is a whole day
    alert(Math.ceil((xmas.getTime() - today.getTime()) / singleDayInMilliseconds) + "days until next Christmas!");
    //Above code turns the insanely large decimal into the next highest integer.
};
xmasCountdown();
