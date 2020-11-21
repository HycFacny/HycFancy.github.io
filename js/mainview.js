var together = new Date(2020, 9 - 1, 07);       // start from 0
var dateCalcH = 30;
var dateCalcW = 800;
var currentPage = 0;


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
    
    // set clock
    var w = $('.clock').innerWidth();
    var h = $('.clock').innerHeight();
    $('.clock').css({
        'top' : parseInt((winH - h) / 3),
        'left': parseInt((winW - w) / 2)
    });

    // set scroll event
    var wheelScrolling = function(event) {
        var delta = 0;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
        }
        else if (event.detail) {
            delta = -event.detail / 3;
        }
        if (delta) {
            ChangePage();
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.returnValue = false;
    };

    if (window.addEventListener) {
        window.addEventListener("DOMMouseScroll", wheelScrolling, false);
    }
    window.onmousewheel = wheelScrolling;


    timer();
    
});

function ChangePage() {
    currentPage = 1 - currentPage;
    if (currentPage == 0) {
        SetChildrenProperty("#main-view", "display", "block");
        SetChildrenProperty("#next-view", "display", "none");
        $('.clock').css("display", "flex");
        $('#main-view-flag').css({
            "checked": true,
            //"display": none
        });
        $('#next-view-flag').css("checked", false);
    }
    else {
        SetChildrenProperty("#main-view", "display", "none");
        SetChildrenProperty("#next-view", "display", "block");
        $('#main-view-flag').css("checked", false);
        $('#next-view-flag').css({
            "checked": true,
           // "display": none
        });
    }
}

function SetChildrenProperty(curElement, property, value) {
    $(curElement).children().css(property, value);        
}

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