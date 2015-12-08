function firstSunday(){
    for(var year = 2014; year <= 2050; year++){
        var day = new Date(year, 0, 1)
        if (day.getDay() == 0) {
            console.log("The year begins on a Sunday in "+year);
        }
    }
};
firstSunday();