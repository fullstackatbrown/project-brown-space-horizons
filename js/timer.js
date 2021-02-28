var targetDate = new Date("February 8, 2022 12:00:00").getTime();

var currentDate = new Date().getTime();

var timeUntilEvent = targetDate - currentDate;

var days = Math.floor(timeUntilEvent  / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeUntilEvent  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeUntilEvent  % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeUntilEvent  % (1000 * 60)) / 1000);

function displayTime() {
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (timeUntilEvent <= 0) {
        clearInterval(displayTime());
        document.getElementById("timer").innerHTML = "Space Horizons is here! Come Join Us!";
    }
}

var timer = setInterval(displayTime(), 1000);