var together = new Date(2020, 9 - 1, 07);       // start from 0
var dateCalcH = 30;
var dateCalcW = 800;


$(document).ready(function() {
    var winW = window.innerWidth;
    var winH = window.innerHeight;

    // set time calculator
    $('#date-calc').html(GetDateDiffString());
    $('#date-calc').css({
        'height': dateCalcH,
        'width' : dateCalcW,
        'top' : parseInt((winH - dateCalcH) / 4 * 3),
        'left': parseInt((winW - dateCalcW) / 2)
    });
    
    var w = $('.clock').innerWidth();
    var h = $('.clock').innerHeight();
    $('.clock').css({
        'top' : parseInt((winH - h) / 3),
        'left': parseInt((winW - w) / 2)
    });
    
    timer();

    
});

function timer() {
    $('#date-calc').html(GetDateDiffString());
    setTimeout("timer()", 1000);
}

function GetDateDiffString() {
    var current = new Date();
    // console.log(together.toDateString());
    // console.log(current.toDateString());
    var interval = parseInt(parseInt(current - together) / 1000);
    var seconds = parseInt(interval % 60);
    var minutes = parseInt((interval / 60) % 60);
    var hours = parseInt((interval / 60 / 60) % 24);
    var days = parseInt(interval / 60 / 60 / 24);
    // console.log(interval, seconds, minutes, hours, days);
    return (  days.toString() + " Days "
            + hours.toString() + " hours "
            + minutes.toString() + " minutes "
            + seconds.toString() + " sceconds");
}